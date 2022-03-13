/*
    - JavaScript Output:
        - JavaScript Display Data in different ways:
            - innerHTML:
                - Access HTML element:
                    - Steps:
                      - Use document.getElementById(id) method
                      - Then id attribute defines HTML element, innertHTML property defines HTML content:
                    - Example:
                      <p id="demoID"></p>
                      <script>
                        document.getElementById("demoID").innerHTML = "display message";
                      </script>

            - document.write():
                - Testing purpose, use: document.write()
                - Example:
                    <script>
                      document.write("display message");
                    </script>
                * Using document.write() after an HTML documentis loaded, delete all existing HTML
                * Should only be used for testing

            - window.alert():
                - Use an alert box to display data
                - example:
                  <script>
                    window.alert("display message");
                  </script>

            - console.log():
                - For debuggin purpose to display data in browser
                - example:
                  <script>
                    console.log("display message");
                  </script>

            - JavaScript Print:
                - Works differently from other languages. It will print the screen
                - example:
                  <button onclick="window.print()">Print this page</button>
*/