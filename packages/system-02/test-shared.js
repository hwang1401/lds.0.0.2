const shared = require('@lumir/shared');
console.log('Total exports:', Object.keys(shared).length);
console.log('Has Text:', 'Text' in shared);
console.log('Has Surface:', 'Surface' in shared);
console.log('Has Divider:', 'Divider' in shared);
console.log('Has Frame:', 'Frame' in shared);
console.log('Has Icon:', 'Icon' in shared);
console.log('Available primitives:', Object.keys(shared).filter(key => ['Text', 'Surface', 'Divider', 'Frame', 'Icon'].includes(key)));
console.log('Total shared keys:', Object.keys(shared)); 