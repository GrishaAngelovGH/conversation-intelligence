/*
  * This hook highlights specific keywords within a given text.
  *
  * The algorithm processes a list of "keywords to highlight" one by one.
  *
  * For each keyword:
  * 1. It scans through the current segments of the text. Initially, this is just the full text.
  *    After processing previous keywords, these segments might include both plain text parts
  *    and parts that have already been marked for highlighting (as React elements).
  * 2. Every time it finds that keyword in a plain text segment, it "marks" that specific part
  *    by converting it into a special highlighted section (a React `<span>` element).
  * 3. An important aspect is that it does this without undoing any highlighting
  *    that was already applied by a previous keyword in the list. It preserves already
  *    highlighted parts, ensuring they are not re-processed as plain text.
  *    This ensures that if keywords overlap (like "apple" and "apple pie"),
  *    both parts are handled correctly.
  *
  * By the time the algorithm has gone through all the keywords in the list,
  * the original text has been transformed into a sequence (an array) of
  * text segments (plain strings) and highlighted parts (React `<span>` elements)
  * where all the specified keywords are clearly marked for highlighting.
  * React then takes this sequence and renders it to the screen.
*/

const useHighlight = (text, keywordsToHighlight) => {
  if (!keywordsToHighlight || keywordsToHighlight.length === 0 || !text) {
    return text
  }

  let processedParts = [text] // Start with the full text as a single string part

  // Iterate over each keyword to apply highlighting
  // In each iteration, we process the text parts accumulated so far
  for (const keyword of keywordsToHighlight) {
    const regex = new RegExp(`(${keyword})`, 'gi')
    let nextProcessedParts = [] // This array will hold the result after processing with the current keyword

    // Iterate over the current parts of the text (could be strings or already highlighted elements)
    for (const part of processedParts) {
      if (typeof part !== 'string') {
        // If the part is already a React element (e.g., from a previous highlight), add it as is
        nextProcessedParts.push(part)
        continue
      }

      // If the part is a string, split it by the current keyword.
      // The capturing group in the regex ensures the keyword itself is included in the resulting array.
      // Example: "hello world" split by /(world)/gi -> ["hello ", "world", ""]
      const splitByKeyword = part.split(regex)

      // Reassemble the split parts, wrapping matched keywords in <span> for highlighting
      for (let i = 0; i < splitByKeyword.length; i++) {
        if (i % 2 === 1) { // Odd indices are the matched keywords (due to the capturing group)
          // Wrap the matched keyword in a <span> with highlighting styles
          nextProcessedParts.push(
            <span key={`${keyword}-${i}`} className="bg-yellow-200">
              {splitByKeyword[i]}
            </span>
          )
        } else { // Even indices are non-matched text segments
          // Only add non-empty strings to avoid empty text nodes
          if (splitByKeyword[i].length > 0) {
            nextProcessedParts.push(splitByKeyword[i])
          }
        }
      }
    }
    processedParts = nextProcessedParts
  }

  return processedParts
}

export default useHighlight