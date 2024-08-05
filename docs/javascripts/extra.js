<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Wait until Mermaid diagrams are fully rendered
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));

    // Function to adjust node sizes and text
    function adjustMermaidFlowcharts() {
      document.querySelectorAll('.mermaid').forEach(function (element) {
        element.querySelectorAll('.node rect').forEach(function (rect) {
          rect.setAttribute('width', '500'); // Adjust width of node boxes
          rect.setAttribute('height', '500'); // Adjust height of node boxes
        });
        
        element.querySelectorAll('.node text').forEach(function (text) {
          text.setAttribute('font-size', '24'); // Adjust font size
        });
      });
    }

    // Call the function to adjust flowcharts
    adjustMermaidFlowcharts();
  });
</script>
