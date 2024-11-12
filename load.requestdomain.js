// Function to replace the content of the page with the content from a given URL
async function replaceWithExternalSource(url) {
  try {
    // Fetch the HTML content from the specified URL
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch content');

    // Get the HTML text from the response
    const html = await response.text();

    // Create a new temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Extract <head> and <body> content from the fetched HTML
    const headContent = tempDiv.querySelector('head').innerHTML;
    const bodyContent = tempDiv.querySelector('body').innerHTML;

    // Replace the entire document's head and body with the fetched content
    document.head.innerHTML = headContent;
    document.body.innerHTML = bodyContent;

    // Re-inject any external script tags from the new HTML
    const scripts = tempDiv.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.textContent = script.textContent;
      document.body.appendChild(newScript);
    });

  } catch (error) {
    console.error('Error replacing content:', error);
  }
}

// Wait for 4 seconds, then prompt the user for a URL
setTimeout(() => {
  const url = prompt("Enter the URL you want to load:", "https://cookieclicker.com/");
  
  // If the user enters a valid URL, replace the content with that URL's HTML
  if (url) {
    replaceWithExternalSource(url);
  } else {
    alert("No URL entered. The page content will not be replaced.");
  }
}, 4000);  // 4000 milliseconds = 4 seconds
