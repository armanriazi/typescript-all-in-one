export enum EvidenceTypeEnum {
    UNKNOWN = '',
    PASSPORT_VISA = 'passport_visa',
    PASSPORT = 'passport',
    SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
    SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
    SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card',
  }
  // Where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
const status = 'passport' as EvidenceTypeEnum; 

switch (status) {
    case EvidenceTypeEnum.PASSPORT:
        console.log(status);
    break        
    case EvidenceTypeEnum.PASSPORT_VISA:
        console.log(status);
    break    
}
/*    
if (value === EvidenceTypeEnum.PASSPORT){
    console.log('You provided a passport');
    console.log(value); // `passport`
}*/