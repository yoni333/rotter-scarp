function convertToNestedJson(arr) {
    let root = {}; // Root of the nested structure
    let nodes = [root]; // Stack to keep track of nodes

    arr.forEach(({nestedLevelL, title}) => {
        let node = {}; // New node
        // Find parent node
        let parent = nodes[nestedLevelL] || root;
        // console.table({nestedLevelL,title,root,nodes,parent})
        // console.log(JSON.stringify(parent));
        // If parent doesn't directly contain a 'nested' key or it's not an array, initialize it
        if (!Array.isArray(parent.nested)) {
            parent.nested = [];
        }
        // Add the new node to the 'nested' array of the parent
        parent.nested.push({[title]: node});
        // Update the nodes array for the current level
        nodes[nestedLevelL + 1] = node;
    });

    // The root node itself is not part of the structure, so we return its 'nested' content
    return root.nested;
}

function printNestedJson(obj, depth = 0) {
    if (Array.isArray(obj)) {
        obj.forEach(item => printNestedJson(item, depth)); // Iterate through array elements
    } else {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(' '.repeat(depth * 2) + key + ':');
            if (typeof value === 'object') {
                printNestedJson(value, depth + 1); // Recurse for nested objects
            } else {
                console.log(' '.repeat((depth + 1) * 2) + value);
            }
        });
    }
}
// Example usage
const arr = [
    {nestedLevelL:0, title:'a'},
    {nestedLevelL:1, title:'a1'},
    {nestedLevelL:2, title:'a2'},
    {nestedLevelL:1, title:'a0'},
    {nestedLevelL:0, title:'k'},
    {nestedLevelL:1, title:'b'},
    {nestedLevelL:0, title:'c'},
    {nestedLevelL:1, title:'d'},
    {nestedLevelL:1, title:'e'},
    {nestedLevelL:2, title:'f'},
    {nestedLevelL:2, title:'g'},
    {nestedLevelL:1, title:'i'},
    {nestedLevelL:0, title:'j'}
];



const nestedJson = convertToNestedJson(arr);
console.log('Nested JSON:', JSON.stringify(nestedJson, null, 2)); // For visualization
printNestedJson(nestedJson); // Print nested structure

