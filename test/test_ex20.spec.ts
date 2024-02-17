// const htmlWithClickEvent = `
// <body>
//     <script type="text/javascript">
//         function handle_click_event() {
//             console.log("handle_click_event() called.");
//         }
//     </script>
//     <div id="click_handler_div"
//         onclick="handle_click_event()"
//     >Click Here</div>
// </body>
// `;


// it("should trigger an onclick DOM event", () => {

//     let dom = new JSDOM(
//         htmlWithClickEvent, 
//         { runScripts: "dangerously" });
  
//     let clickHandler = <HTMLElement>(
//       dom.window.document.querySelector("#click_handler_div")
//     );
    
//     let clickEventSpy = jest.spyOn(clickHandler, "click");
//     clickHandler.click();
//     expect(clickEventSpy).toHaveBeenCalled();
//   });
  