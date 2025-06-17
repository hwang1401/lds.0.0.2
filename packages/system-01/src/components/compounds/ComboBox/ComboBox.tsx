import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { Surface, Frame, Sizing, Divider } from '@lumir/shared';
import { Field } from '../Field';
import { OptionList } from '../OptionList';
import { Chip } from '../Chip';

export interface ComboBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface ComboBoxProps {
  /**
   * 선택 가능한 옵션들
   */
  options: ComboBoxOption[];
  
  /**
   * 현재 선택된 값(들)
   */
  value?: string | string[];
  
  /**
   * 다중 선택 허용 여부
   */
  multiple?: boolean;
  
  /**
   * 검색 가능 여부
   */
  searchable?: boolean;
  
  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
  
  /**
   * 라벨
   */
  label?: string;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * 도움말 텍스트
   */
  helperText?: string;
  
  /**
   * 필수 입력 여부
   */
  required?: boolean;
  
  /**
   * 드롭다운 방향
   */
  direction?: 'up' | 'down';
  
  /**
   * Field 스타일 변형
   */
  fieldVariant?: 'outlined' | 'transparent' | 'filled';
  
  /**
   * Field 크기
   */
  fieldSize?: 'md' | 'lg' | 'xlg';
  
  /**
   * Field 너비
   * - 'fit-content': 내용에 맞춰 크기 조절
   * - 'fill-width': 부모 요소 너비에 맞게 조절 (100%)
   * - 커스텀 값: 직접 너비 지정 (예: '200px', '50%')
   */
  fieldWidth?: 'fit-content' | 'fill-width' | string | number;
  
  /**
   * 라벨 위치
   */
  labelPosition?: 'above' | 'before' | 'none';
  
  /**
   * 왼쪽 아이콘 (rightIcon은 드롭다운 화살표로 고정)
   */
  leftIcon?: string;
  
  /**
   * 값 변경 핸들러
   */
  onChange?: (value: string | string[]) => void;
  
  /**
   * 검색어 변경 핸들러
   */
  onSearch?: (searchTerm: string) => void;
  
  /**
   * 드롭다운 열림/닫힘 상태 변경 핸들러
   */
  onToggle?: (isOpen: boolean) => void;
}

/**
 * ComboBox 컴포넌트는 Field를 기반으로 하는 선택 가능한 드롭다운 메뉴입니다.
 * 검색 기능, 단일/다중 선택을 지원하며 선택된 항목을 Chip으로 표시합니다.
 */
export const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(({
  options,
  value,
  multiple = false,
  searchable = false,
  placeholder = '선택해주세요',
  label,
  disabled = false,
  errorMessage,
  helperText,
  required = false,
  direction = 'down',
  fieldVariant,
  fieldSize,
  fieldWidth,
  labelPosition,
  leftIcon,
  onChange,
  onSearch,
  onToggle,
  ...rest
}, ref) => {
  // 기본값 처리
  const selectedValues = multiple 
    ? (Array.isArray(value) ? value : [])
    : (typeof value === 'string' ? [value] : []);
  
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLInputElement>(null);

  // 검색어에 따른 옵션 필터링
  useEffect(() => {
    if (!searchable || !searchTerm) {
      setFilteredOptions(options);
      return;
    }
    
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
    
    if (onSearch) {
      onSearch(searchTerm);
    }
  }, [searchTerm, options, searchable, onSearch]);

  // 외부 클릭 감지로 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm(''); // 드롭다운이 닫힐 때 검색어 초기화
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // 드롭다운 토글
  const handleToggle = () => {
    if (disabled) return;
    
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && searchable && fieldRef.current) {
      fieldRef.current.focus();
    }
    
    if (!newIsOpen) {
      setSearchTerm(''); // 드롭다운이 닫힐 때 검색어 초기화
    }
    
    if (onToggle) {
      onToggle(newIsOpen);
    }
  };

  // 옵션 선택 처리
  const handleOptionSelect = (optionValue: string) => {
    if (disabled) return;
    
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      
      if (onChange) {
        onChange(newValues);
      }
    } else {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // 칩 제거 처리
  const handleChipRemove = (valueToRemove: string) => {
    if (disabled) return;
    
    const newValues = selectedValues.filter(v => v !== valueToRemove);
    if (onChange) {
      onChange(multiple ? newValues : '');
    }
  };

  // 선택된 값들의 라벨 표시
  const getDisplayValue = () => {
    if (selectedValues.length === 0) return '';
    if (selectedValues.length === 1) {
      const option = options.find(opt => opt.value === selectedValues[0]);
      return option?.label || '';
    }
    return `${selectedValues.length}개 선택됨`;
  };

  // 검색 입력 처리
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Field 클릭 처리
  const handleFieldClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 검색 가능한 상태에서 input을 직접 클릭한 경우에는 토글하지 않음
    if (searchable && event.target instanceof HTMLInputElement) {
      return;
    }
    handleToggle();
  };

  // 키보드 이벤트 처리
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || (event.key === ' ' && !searchable)) {
      event.preventDefault();
      handleToggle();
    } else if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // 옵션들을 그룹별로 정리
  const groupedOptions = filteredOptions.reduce((groups, option) => {
    const groupName = option.group || 'default';
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(option);
    return groups;
  }, {} as Record<string, ComboBoxOption[]>);

  // 선택된 칩들 렌더링
  const renderSelectedChips = () => {
    if (!multiple || selectedValues.length === 0) return null;
    
    return (
      <Frame display="flex" direction="row" wrap="wrap" gap="xs">
        {selectedValues.map((selectedValue) => {
          const option = options.find(opt => opt.value === selectedValue);
          if (!option) return null;
          
          return (
            <Chip
              key={selectedValue}
              size="sm"
              removable
              disabled={disabled}
              onRemove={() => handleChipRemove(selectedValue)}
            >
              {option.label}
            </Chip>
          );
        })}
      </Frame>
    );
  };

  return (
    <Surface style={{ position: 'relative', width: '100%' }} {...rest}>
      <div ref={containerRef}>
        <Frame display="flex" direction="column" gap="sm">
          {/* Field 영역 */}
          <Field
            ref={fieldRef}
            variant={fieldVariant}
            size={fieldSize}
            fieldWidth={fieldWidth}
            minWidth="80px"
            truncateOnFit={fieldWidth === 'fit-content'}
            labelPosition={labelPosition}
            leftIcon={leftIcon as any}
            label={label}
            placeholder={placeholder}
            value={searchable && isOpen ? searchTerm : getDisplayValue()}
            disabled={disabled}
            error={!!errorMessage}
            errorMessage={errorMessage}
            helperText={helperText}
            required={required}
            readOnly={!searchable}
            rightIcon="LineIconsArrowChevronDownIcon"
            onClick={handleFieldClick}
            onChange={searchable ? handleSearchChange : undefined}
            onKeyDown={handleKeyDown}
            style={{
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          />
          
          {/* 선택된 칩들 */}
          {renderSelectedChips()}
        </Frame>
        
        {/* 드롭다운 메뉴 */}
        {isOpen && (
          <Surface
                    background="secondary-system01-1-rest"
            borderRadius="sm"
        borderColor="secondary-system01-1-rest"
            borderWidth="thin"
            borderStyle="solid"
            style={{
              position: 'absolute',
              top: direction === 'down' ? '100%' : 'auto',
              bottom: direction === 'up' ? '100%' : 'auto',
              left: 0,
              right: 0,
              zIndex: 1000,
              marginTop: direction === 'down' ? 'var(--semantic-gap-global-xxs)' : '0',
              marginBottom: direction === 'up' ? 'var(--semantic-gap-global-xxs)' : '0',
              maxHeight: '200px',
              overflowY: 'auto'
            }}
          >
            <Frame display="flex" direction="column" padding="xs">
              {Object.entries(groupedOptions).map(([groupName, groupOptions], groupIndex) => (
                <React.Fragment key={groupName}>
                  {/* 그룹 헤더 */}
                  {groupName !== 'default' && (
                    <>
                      {groupIndex > 0 && (
                        <Frame display="flex" gap="xxs">
                          <Divider orientation="horizontal" thickness="thin" />
                        </Frame>
                      )}
                      <OptionList type="menu-header">{groupName}</OptionList>
                    </>
                  )}
                  
                  {/* 옵션들 */}
                  {groupOptions.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    
                    return (
                      <OptionList
                        key={option.value}
                        type={multiple ? 'checkbox-component' : 'single-select'}
                        selected={!multiple ? isSelected : undefined}
                        disabled={option.disabled}
                        onClick={() => handleOptionSelect(option.value)}
                        checkboxChecked={multiple ? isSelected : undefined}
                        onCheckboxChange={multiple ? () => handleOptionSelect(option.value) : undefined}
                      >
                        {option.label}
                      </OptionList>
                    );
                  })}
                </React.Fragment>
              ))}
              
              {/* 검색 결과 없음 메시지 */}
              {filteredOptions.length === 0 && (
                <OptionList type="menu-header" disabled>
                  검색 결과가 없습니다
                </OptionList>
              )}
            </Frame>
          </Surface>
        )}
      </div>
    </Surface>
  );
});

ComboBox.displayName = 'ComboBox'; 