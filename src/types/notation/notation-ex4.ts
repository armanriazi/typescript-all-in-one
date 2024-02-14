///
/// ```bash
/// pnpm tsc src/types/notation/notation-ex1.ts --outfile  ./dist/notation-ex1.js
/// ```
///
// userData: UserData = null;ngOnInit(): void {
//     this.userData = this.serviceCall.getData();
//   }routeAhead(): void {
//     if (!!this.userData) {
//       this.router.navigateByUrl("vault");
//     }
//   }

//   const isChargeSelected = (charge: PricedCharge): boolean => {
//     const found = charge?.find(item => 
//       item.chargeUniqueId === charge?.chargeUniqueId);  return !!found && charge.length === 1;
//   };