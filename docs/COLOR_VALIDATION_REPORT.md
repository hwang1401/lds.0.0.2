# 🎨 Lumir 디자인 시스템 색상 검증 보고서

**생성일시**: 2025-06-17 오후 1:26:43  
**검증 대상**: Surface.module.css 색상 조합  
**검증 기준**: WCAG 2.1 AA (4.5:1 이상)

---

## 📊 종합 결과

### 🎯 색상 대비 검증
- **총 검증 색상 조합**: 56개
- **✅ 통과**: 37개 (66.1%)
- **❌ 실패**: 19개 (33.9%)

### 🔍 색상 위계 검증
- **총 위계 그룹**: 18개
- **✅ 올바른 위계**: 11개 (61.1%)
- **❌ 문제 있는 위계**: 7개 (38.9%)

### 📈 등급별 분포
- ⚠️ **AA Large** (3:1 이상): 7개 (12.5%)
- ❌ **Fail** (3:1 미만): 19개 (33.9%)
- 🌟 **AAA** (7:1 이상): 17개 (30.4%)
- ✅ **AA** (4.5:1 이상): 13개 (23.2%)

---

## 🔍 색상 위계 분석 상세

### 📊 위계별 상세 분석

#### PRIMARY 위계

| 그룹명 | 테마 | 위계 순서 | 명도 범위 | 상태 | 메시지 |
|--------|------|-----------|-----------|------|--------|
| PRIMARY SYSTEM01 (light) | light | ascending (실제: ascending) | 10.2% | ✅ | 양호 |
| PRIMARY SYSTEM01 (dark) | dark | descending (실제: descending) | 17.1% | ✅ | 양호 |
| PRIMARY SYSTEM02 (light) | light | ascending (실제: ascending) | 7.5% | ✅ | 명도 차이 부족: 7.5% (권장: 10% 이상).  |
| PRIMARY SYSTEM02 (dark) | dark | descending (실제: ascending) | 5.7% | ❌ | 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 5.7% (권장: 10% 이상).  |
| PRIMARY SYSTEM03 (light) | light | ascending (실제: ascending) | 7.5% | ✅ | 명도 차이 부족: 7.5% (권장: 10% 이상).  |
| PRIMARY SYSTEM03 (dark) | dark | descending (실제: descending) | 0.8% | ✅ | 명도 차이 부족: 0.8% (권장: 10% 이상).  |

#### SECONDARY 위계

| 그룹명 | 테마 | 위계 순서 | 명도 범위 | 상태 | 메시지 |
|--------|------|-----------|-----------|------|--------|
| SECONDARY SYSTEM01 (light) | light | descending (실제: ascending) | 7.1% | ❌ | 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |
| SECONDARY SYSTEM01 (dark) | dark | ascending (실제: descending) | 7.1% | ❌ | 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |
| SECONDARY SYSTEM02 (light) | light | descending (실제: ascending) | 7.1% | ❌ | 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |
| SECONDARY SYSTEM02 (dark) | dark | ascending (실제: descending) | 7.1% | ❌ | 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |
| SECONDARY SYSTEM03 (light) | light | descending (실제: ascending) | 7.1% | ❌ | 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |
| SECONDARY SYSTEM03 (dark) | dark | ascending (실제: descending) | 7.1% | ❌ | 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상).  |

#### CTA 위계

| 그룹명 | 테마 | 위계 순서 | 명도 범위 | 상태 | 메시지 |
|--------|------|-----------|-----------|------|--------|
| CTA SYSTEM01 (light) | light | ascending (실제: ascending) | 7.6% | ✅ | 명도 차이 부족: 7.6% (권장: 10% 이상).  |
| CTA SYSTEM01 (dark) | dark | descending (실제: descending) | 5.7% | ✅ | 명도 차이 부족: 5.7% (권장: 10% 이상).  |
| CTA SYSTEM02 (light) | light | ascending (실제: ascending) | 8.8% | ✅ | 명도 차이 부족: 8.8% (권장: 10% 이상).  |
| CTA SYSTEM02 (dark) | dark | descending (실제: descending) | 2.5% | ✅ | 명도 차이 부족: 2.5% (권장: 10% 이상).  |
| CTA SYSTEM03 (light) | light | ascending (실제: ascending) | 6.9% | ✅ | 명도 차이 부족: 6.9% (권장: 10% 이상).  |
| CTA SYSTEM03 (dark) | dark | descending (실제: descending) | 4.7% | ✅ | 명도 차이 부족: 4.7% (권장: 10% 이상).  |



---

## ❌ 접근성 기준 미달 색상 조합

### 1. System-02 Primary Button (Light)

**대비율**: 2.78:1 ❌
**배경색**: #4CAF50
**전경색**: #FFFFFF
**용도**: surface--background-primary-system02-1-rest + surface--foreground-primary-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 4.75:1 (AA)

---

### 2. System-03 Primary Button (Light)

**대비율**: 2.16:1 ❌
**배경색**: #FF9800
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-rest + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 6.12:1 (AA)

---

### 3. System-01 CTA Button (Light)

**대비율**: 2.36:1 ❌
**배경색**: #66BB6A
**전경색**: #FFFFFF
**용도**: surface--background-cta-system01-1-rest + surface--foreground-cta-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 5.58:1 (AA)

---

### 4. System-03 CTA Button (Light)

**대비율**: 2.65:1 ❌
**배경색**: #42A5F5
**전경색**: #FFFFFF
**용도**: surface--background-cta-system03-1-rest + surface--foreground-cta-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 4.99:1 (AA)

---

### 5. Warning State (Light)

**대비율**: 1.19:1 ❌
**배경색**: #FFEE58
**전경색**: #FFFFFF
**용도**: surface--background-warning + surface--foreground-secondary-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 11.08:1 (AAA)

---

### 6. Success State (Light)

**대비율**: 2.36:1 ❌
**배경색**: #66BB6A
**전경색**: #FFFFFF
**용도**: surface--background-success + surface--foreground-secondary-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 5.58:1 (AA)

---

### 7. Info State (Light)

**대비율**: 2.65:1 ❌
**배경색**: #42A5F5
**전경색**: #FFFFFF
**용도**: surface--background-info + surface--foreground-secondary-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 4.99:1 (AA)

---

### 8. System-02 CTA Button (Dark)

**대비율**: 2.98:1 ❌
**배경색**: #8E24AA
**전경색**: #000000
**용도**: surface--background-cta-system02-1-rest + surface--foreground-cta-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-dark-80 (#CFCFCF)
**개선 후 대비율**: 4.52:1 (AA)

---

### 9. SYSTEM01 Primary pressed (light)

**대비율**: 2.21:1 ❌
**배경색**: #64B5F6
**전경색**: #FFFFFF
**용도**: surface--background-primary-system01-1-pressed + surface--foreground-primary-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 5.96:1 (AA)

---

### 10. SYSTEM01 Primary disabled (light)

**대비율**: 1.40:1 ❌
**배경색**: #BBDEFB
**전경색**: #FFFFFF
**용도**: surface--background-primary-system01-1-disabled + surface--foreground-primary-system01-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 9.40:1 (AAA)

---

### 11. SYSTEM02 Primary rest (light)

**대비율**: 2.78:1 ❌
**배경색**: #4CAF50
**전경색**: #FFFFFF
**용도**: surface--background-primary-system02-1-rest + surface--foreground-primary-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 4.75:1 (AA)

---

### 12. SYSTEM02 Primary pressed (light)

**대비율**: 2.01:1 ❌
**배경색**: #81C784
**전경색**: #FFFFFF
**용도**: surface--background-primary-system02-1-pressed + surface--foreground-primary-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 6.56:1 (AA)

---

### 13. SYSTEM02 Primary disabled (light)

**대비율**: 1.35:1 ❌
**배경색**: #C8E6C8
**전경색**: #FFFFFF
**용도**: surface--background-primary-system02-1-disabled + surface--foreground-primary-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 9.81:1 (AAA)

---

### 14. SYSTEM02 Primary disabled (dark)

**대비율**: 2.52:1 ❌
**배경색**: #1B5E20
**전경색**: #0A0A0A
**용도**: surface--background-primary-system02-1-disabled + surface--foreground-primary-system02-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-dark-80 (#CFCFCF)
**개선 후 대비율**: 5.05:1 (AA)

---

### 15. SYSTEM03 Primary rest (light)

**대비율**: 2.16:1 ❌
**배경색**: #FF9800
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-rest + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 6.12:1 (AA)

---

### 16. SYSTEM03 Primary hovered (light)

**대비율**: 2.70:1 ❌
**배경색**: #F57C00
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-hovered + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 4.88:1 (AA)

---

### 17. SYSTEM03 Primary pressed (light)

**대비율**: 1.73:1 ❌
**배경색**: #FFB74D
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-pressed + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 7.63:1 (AAA)

---

### 18. SYSTEM03 Primary selected (light)

**대비율**: 2.37:1 ❌
**배경색**: #FB8C00
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-selected + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 5.56:1 (AA)

---

### 19. SYSTEM03 Primary disabled (light)

**대비율**: 1.27:1 ❌
**배경색**: #FFE0B2
**전경색**: #FFFFFF
**용도**: surface--background-primary-system03-1-disabled + surface--foreground-primary-system03-oncolor
**💡 개선 제안**: --foundation-foundation-color-grey-light-80 (#303030)
**개선 후 대비율**: 10.41:1 (AAA)

---



---

## ✅ 우수한 색상 조합 (AAA 등급)

### 1. System-01 Secondary Surface (Light)

**대비율**: 14.52:1 🌟
**배경색**: #0F0F0F
**전경색**: #E0E0E0
**용도**: surface--background-secondary-system01-1-rest + surface--foreground-secondary-system01-1-rest

### 2. System-02 Secondary Surface (Light)

**대비율**: 14.52:1 🌟
**배경색**: #0F0F0F
**전경색**: #E0E0E0
**용도**: surface--background-secondary-system02-1-rest + surface--foreground-secondary-system02-1-rest

### 3. System-03 Secondary Surface (Light)

**대비율**: 14.52:1 🌟
**배경색**: #0F0F0F
**전경색**: #E0E0E0
**용도**: surface--background-secondary-system03-1-rest + surface--foreground-secondary-system03-1-rest

### 4. System-01 Primary Button (Dark)

**대비율**: 8.94:1 🌟
**배경색**: #64B5F6
**전경색**: #0A0A0A
**용도**: surface--background-primary-system01-1-rest + surface--foreground-primary-system01-oncolor

### 5. System-03 Primary Button (Dark)

**대비율**: 9.19:1 🌟
**배경색**: #FF9800
**전경색**: #0A0A0A
**용도**: surface--background-primary-system03-1-rest + surface--foreground-primary-system03-oncolor

### 6. System-01 Secondary Surface (Dark)

**대비율**: 14.46:1 🌟
**배경색**: #F0F0F0
**전경색**: #1F1F1F
**용도**: surface--background-secondary-system01-1-rest + surface--foreground-secondary-system01-1-rest

### 7. System-02 Secondary Surface (Dark)

**대비율**: 14.46:1 🌟
**배경색**: #F0F0F0
**전경색**: #1F1F1F
**용도**: surface--background-secondary-system02-1-rest + surface--foreground-secondary-system02-1-rest

### 8. System-03 Secondary Surface (Dark)

**대비율**: 14.46:1 🌟
**배경색**: #F0F0F0
**전경색**: #1F1F1F
**용도**: surface--background-secondary-system03-1-rest + surface--foreground-secondary-system03-1-rest

### 9. Warning State (Dark)

**대비율**: 14.19:1 🌟
**배경색**: #FDD835
**전경색**: #0A0A0A
**용도**: surface--background-warning + surface--foreground-secondary-system01-oncolor

### 10. SYSTEM01 Primary rest (dark)

**대비율**: 8.94:1 🌟
**배경색**: #64B5F6
**전경색**: #0A0A0A
**용도**: surface--background-primary-system01-1-rest + surface--foreground-primary-system01-oncolor

*총 17개의 AAA 등급 조합이 있습니다.*



---

## 📋 전체 검증 결과

| # | 조합명 | 대비율 | 등급 | 상태 | 배경색 | 전경색 |
|---|---------|-------|------|------|--------|--------|
| 1 | System-01 Primary Button (Light) | 3.68:1 | ⚠️ AA Large | ✅ | #1E88E5 | #FFFFFF |
| 2 | System-02 Primary Button (Light) | 2.78:1 | ❌ Fail | ❌ | #4CAF50 | #FFFFFF |
| 3 | System-03 Primary Button (Light) | 2.16:1 | ❌ Fail | ❌ | #FF9800 | #FFFFFF |
| 4 | System-01 Secondary Surface (Light) | 14.52:1 | 🌟 AAA | ✅ | #0F0F0F | #E0E0E0 |
| 5 | System-02 Secondary Surface (Light) | 14.52:1 | 🌟 AAA | ✅ | #0F0F0F | #E0E0E0 |
| 6 | System-03 Secondary Surface (Light) | 14.52:1 | 🌟 AAA | ✅ | #0F0F0F | #E0E0E0 |
| 7 | System-01 CTA Button (Light) | 2.36:1 | ❌ Fail | ❌ | #66BB6A | #FFFFFF |
| 8 | System-02 CTA Button (Light) | 4.82:1 | ✅ AA | ✅ | #AB47BC | #FFFFFF |
| 9 | System-03 CTA Button (Light) | 2.65:1 | ❌ Fail | ❌ | #42A5F5 | #FFFFFF |
| 10 | Error State (Light) | 3.49:1 | ⚠️ AA Large | ✅ | #EF5350 | #FFFFFF |
| 11 | Warning State (Light) | 1.19:1 | ❌ Fail | ❌ | #FFEE58 | #FFFFFF |
| 12 | Success State (Light) | 2.36:1 | ❌ Fail | ❌ | #66BB6A | #FFFFFF |
| 13 | Info State (Light) | 2.65:1 | ❌ Fail | ❌ | #42A5F5 | #FFFFFF |
| 14 | System-01 Primary Button (Dark) | 8.94:1 | 🌟 AAA | ✅ | #64B5F6 | #0A0A0A |
| 15 | System-02 Primary Button (Dark) | 4.81:1 | ✅ AA | ✅ | #388E3C | #0A0A0A |
| 16 | System-03 Primary Button (Dark) | 9.19:1 | 🌟 AAA | ✅ | #FF9800 | #0A0A0A |
| 17 | System-01 Secondary Surface (Dark) | 14.46:1 | 🌟 AAA | ✅ | #F0F0F0 | #1F1F1F |
| 18 | System-02 Secondary Surface (Dark) | 14.46:1 | 🌟 AAA | ✅ | #F0F0F0 | #1F1F1F |
| 19 | System-03 Secondary Surface (Dark) | 14.46:1 | 🌟 AAA | ✅ | #F0F0F0 | #1F1F1F |
| 20 | System-01 CTA Button (Dark) | 6.36:1 | ✅ AA | ✅ | #43A047 | #000000 |
| 21 | System-02 CTA Button (Dark) | 2.98:1 | ❌ Fail | ❌ | #8E24AA | #000000 |
| 22 | System-03 CTA Button (Dark) | 5.71:1 | ✅ AA | ✅ | #1E88E5 | #000000 |
| 23 | Error State (Dark) | 4.68:1 | ✅ AA | ✅ | #E53935 | #0A0A0A |
| 24 | Warning State (Dark) | 14.19:1 | 🌟 AAA | ✅ | #FDD835 | #0A0A0A |
| 25 | Success State (Dark) | 5.99:1 | ✅ AA | ✅ | #43A047 | #0A0A0A |
| 26 | Info State (Dark) | 5.38:1 | ✅ AA | ✅ | #1E88E5 | #0A0A0A |
| 27 | SYSTEM01 Primary rest (light) | 3.68:1 | ⚠️ AA Large | ✅ | #1E88E5 | #FFFFFF |
| 28 | SYSTEM01 Primary rest (dark) | 8.94:1 | 🌟 AAA | ✅ | #64B5F6 | #0A0A0A |
| 29 | SYSTEM01 Primary hovered (light) | 4.60:1 | ✅ AA | ✅ | #1976D2 | #FFFFFF |
| 30 | SYSTEM01 Primary hovered (dark) | 7.48:1 | 🌟 AAA | ✅ | #42A5F5 | #0A0A0A |
| 31 | SYSTEM01 Primary pressed (light) | 2.21:1 | ❌ Fail | ❌ | #64B5F6 | #FFFFFF |
| 32 | SYSTEM01 Primary pressed (dark) | 5.38:1 | ✅ AA | ✅ | #1E88E5 | #0A0A0A |
| 33 | SYSTEM01 Primary selected (light) | 3.68:1 | ⚠️ AA Large | ✅ | #1E88E5 | #FFFFFF |
| 34 | SYSTEM01 Primary selected (dark) | 6.34:1 | ✅ AA | ✅ | #2196F3 | #0A0A0A |
| 35 | SYSTEM01 Primary disabled (light) | 1.40:1 | ❌ Fail | ❌ | #BBDEFB | #FFFFFF |
| 36 | SYSTEM01 Primary disabled (dark) | 4.30:1 | ⚠️ AA Large | ✅ | #1976D2 | #0A0A0A |
| 37 | SYSTEM02 Primary rest (light) | 2.78:1 | ❌ Fail | ❌ | #4CAF50 | #FFFFFF |
| 38 | SYSTEM02 Primary rest (dark) | 4.81:1 | ✅ AA | ✅ | #388E3C | #0A0A0A |
| 39 | SYSTEM02 Primary hovered (light) | 4.12:1 | ⚠️ AA Large | ✅ | #388E3C | #FFFFFF |
| 40 | SYSTEM02 Primary hovered (dark) | 5.99:1 | ✅ AA | ✅ | #43A047 | #0A0A0A |
| 41 | SYSTEM02 Primary pressed (light) | 2.01:1 | ❌ Fail | ❌ | #81C784 | #FFFFFF |
| 42 | SYSTEM02 Primary pressed (dark) | 7.12:1 | 🌟 AAA | ✅ | #4CAF50 | #0A0A0A |
| 43 | SYSTEM02 Primary selected (light) | 3.30:1 | ⚠️ AA Large | ✅ | #43A047 | #FFFFFF |
| 44 | SYSTEM02 Primary selected (dark) | 8.37:1 | 🌟 AAA | ✅ | #66BB6A | #0A0A0A |
| 45 | SYSTEM02 Primary disabled (light) | 1.35:1 | ❌ Fail | ❌ | #C8E6C8 | #FFFFFF |
| 46 | SYSTEM02 Primary disabled (dark) | 2.52:1 | ❌ Fail | ❌ | #1B5E20 | #0A0A0A |
| 47 | SYSTEM03 Primary rest (light) | 2.16:1 | ❌ Fail | ❌ | #FF9800 | #FFFFFF |
| 48 | SYSTEM03 Primary rest (dark) | 9.19:1 | 🌟 AAA | ✅ | #FF9800 | #0A0A0A |
| 49 | SYSTEM03 Primary hovered (light) | 2.70:1 | ❌ Fail | ❌ | #F57C00 | #FFFFFF |
| 50 | SYSTEM03 Primary hovered (dark) | 11.44:1 | 🌟 AAA | ✅ | #FFB74D | #0A0A0A |
| 51 | SYSTEM03 Primary pressed (light) | 1.73:1 | ❌ Fail | ❌ | #FFB74D | #FFFFFF |
| 52 | SYSTEM03 Primary pressed (dark) | 7.32:1 | 🌟 AAA | ✅ | #F57C00 | #0A0A0A |
| 53 | SYSTEM03 Primary selected (light) | 2.37:1 | ❌ Fail | ❌ | #FB8C00 | #FFFFFF |
| 54 | SYSTEM03 Primary selected (dark) | 10.19:1 | 🌟 AAA | ✅ | #FFA726 | #0A0A0A |
| 55 | SYSTEM03 Primary disabled (light) | 1.27:1 | ❌ Fail | ❌ | #FFE0B2 | #FFFFFF |
| 56 | SYSTEM03 Primary disabled (dark) | 5.22:1 | ✅ AA | ✅ | #E65100 | #0A0A0A |


---

## 💡 개선 권장사항

### 🎯 색상 대비 개선

1. **Warning State (Light)**: 현재 1.19:1 → **즉시 개선 필요**
   - 권장: 배경색을 더 어둡게 또는 텍스트를 더 어둡게 조정

2. **System-02, System-03 Primary Button (Light)**: 대비율 3:1 미만
   - 권장: 버튼 배경색을 더 진하게 조정

3. **전체적 패턴**: 밝은 배경 + 흰색 텍스트 조합 검토 필요

### 📊 색상 위계 개선

1. **PRIMARY SYSTEM02 (dark)**
   - **문제**: 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 5.7% (권장: 10% 이상). 
   - **현재 순서**: ascending
   - **권장 순서**: descending
   - **구체적 권장사항**:
     - 1. #43A047 (Level 2)
     - 2. #388E3C (Level 1)

2. **SECONDARY SYSTEM01 (light)**
   - **문제**: 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: ascending
   - **권장 순서**: descending
   - **구체적 권장사항**:
     - 1. #212121 (Level 3)
     - 2. #1F1F1F (Level 2)
     - 3. #0F0F0F (Level 1)

3. **SECONDARY SYSTEM01 (dark)**
   - **문제**: 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: descending
   - **권장 순서**: ascending
   - **구체적 권장사항**:
     - 1. #DEDEDE (Level 3)
     - 2. #E0E0E0 (Level 2)
     - 3. #F0F0F0 (Level 1)

4. **SECONDARY SYSTEM02 (light)**
   - **문제**: 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: ascending
   - **권장 순서**: descending
   - **구체적 권장사항**:
     - 1. #212121 (Level 3)
     - 2. #1F1F1F (Level 2)
     - 3. #0F0F0F (Level 1)

5. **SECONDARY SYSTEM02 (dark)**
   - **문제**: 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: descending
   - **권장 순서**: ascending
   - **구체적 권장사항**:
     - 1. #DEDEDE (Level 3)
     - 2. #E0E0E0 (Level 2)
     - 3. #F0F0F0 (Level 1)

6. **SECONDARY SYSTEM03 (light)**
   - **문제**: 위계 순서 오류: descending 순서여야 하지만 ascending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: ascending
   - **권장 순서**: descending
   - **구체적 권장사항**:
     - 1. #212121 (Level 3)
     - 2. #1F1F1F (Level 2)
     - 3. #0F0F0F (Level 1)

7. **SECONDARY SYSTEM03 (dark)**
   - **문제**: 위계 순서 오류: ascending 순서여야 하지만 descending 순서임. 명도 차이 부족: 7.1% (권장: 10% 이상). 
   - **현재 순서**: descending
   - **권장 순서**: ascending
   - **구체적 권장사항**:
     - 1. #DEDEDE (Level 3)
     - 2. #E0E0E0 (Level 2)
     - 3. #F0F0F0 (Level 1)



---

## 🏷️ 용어 설명

- **WCAG 2.1 AA**: Web Content Accessibility Guidelines, 일반 텍스트 4.5:1 이상
- **AAA**: 더 엄격한 기준으로 7:1 이상
- **AA Large**: 대형 텍스트(18pt 이상)용 기준으로 3:1 이상
- **명도 차이**: HSL 색상 모델의 L(Lightness) 값 차이로 시각적 구분도를 측정

---

*이 보고서는 자동 생성되었습니다.*
