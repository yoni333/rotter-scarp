// Helper function to get the level of indentation
function getIndentation(text) {
  if (text === null) {
    return 0; // Return 0 if text is null
  }
  const onltNBSP = text.split("<")[0];
  const matches = onltNBSP.match(/^(&nbsp;)+/);
  if (matches) {
    // Calculate the indentation level based on the matches
    const inputNumber = (matches[0].length / 6 / 2); // Assuming each &nbsp; represents 6 CHARS 
    if (inputNumber < 2) { return inputNumber }
    const convertedNumber = inputNumber / 2 + 1;
    return convertedNumber;
  }
  return 0; // Default to 0 if no matches found
}


// Convert comments to nested JSON
function convertToNestedJson(arr) {
  let root = {}; // Root of the nested structure
  let nodes = [root]; // Stack to keep track of nodes

  arr.forEach(({ indentation, indexValue, date, author, content }) => {
    let node = { indentation, indexValue, date, author, content }; // New node
    // Find parent node
    let parent = nodes[indentation] || root;
    // console.table({indentation,index,root,nodes,parent})
    // console.log(JSON.stringify(parent));
    // If parent doesn't directly contain a 'nested' key or it's not an array, initialize it
    if (!Array.isArray(parent.nested)) {
      parent.nested = [];
    }
    // Add the new node to the 'nested' array of the parent
    parent.nested.push({ [indexValue]: node });
    // Update the nodes array for the current level
    nodes[indentation + 1] = node;
  });

  // The root node itself is not part of the structure, so we return its 'nested' content
  return root.nested;
}


function extractPostNumberFromUrl(str) {
  const urlString = str

  // Use a regular expression to match and extract the number
  const match = urlString.match(/\/(\d+)\.shtml$/);
  let number = 0
  if (match && match[1]) {
    // Extracted number as a string
    const extractedNumber = match[1];

    // Convert the extracted number to an integer if needed
    number = parseInt(extractedNumber, 10);

    console.log("Extracted Number:", number);
  } else {
    console.log("Number not found in the URL.");
  }

  return number

}


module.exports = {
  getIndentation,
  convertToNestedJson,
  extractPostNumberFromUrl

}