async function replaceWithExternalSource(url) {
  try {
    // Fetch the HTML content from the external URL
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
