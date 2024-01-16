///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex11.ts
/// ```
///
enum Evidence {
    UNKNOWN = '',
    PASSPORT_VISA = 'passport_visa',
    PASSPORT = 'passport'
}
namespace Evidence {
	export function isThereEvidence(status: Evidence) {
        switch (status) {
            case Evidence.PASSPORT:
                console.log(status);
                return true;     
            case Evidence.PASSPORT_VISA:
				return true; 
            break  
			default:
				return false;            
          }
     }
} 
const passport = Evidence.PASSPORT;
console.log(Evidence.isThereEvidence(passport)); 