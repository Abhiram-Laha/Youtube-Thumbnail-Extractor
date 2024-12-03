document.getElementById("extract-btn").addEventListener("click", function() {
    const url = document.getElementById("youtube-url").value.trim();
    const errorMessage = document.getElementById("error-message");
    const thumbnailContainer = document.getElementById("thumbnail-container");
    const thumbnail = document.getElementById("thumbnail");
    const downloadBtn = document.getElementById("download-btn");
    const loadingSpinner = document.getElementById("loading");
  
    // Show loading spinner
    loadingSpinner.style.display = "block";
    errorMessage.style.display = "none";
    thumbnailContainer.style.display = "none";
  
    // Validate URL
    if (!url || !url.includes("youtube.com")) {
      loadingSpinner.style.display = "none";
      errorMessage.style.display = "block";
      return;
    }
  
    // Extract video ID from the URL
    const videoId = url.split("v=")[1]?.split("&")[0];
    if (!videoId) {
      loadingSpinner.style.display = "none";
      errorMessage.style.display = "block";
      return;
    }
  
    // Fetch the high-quality thumbnail (HQ) image
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
    // Set the thumbnail image
    thumbnail.src = thumbnailUrl;
    thumbnail.alt = "Thumbnail of the video";
  
    // Show the thumbnail container and hide loading
    setTimeout(() => {
      loadingSpinner.style.display = "none";
      thumbnailContainer.style.display = "block";
      downloadBtn.href = thumbnailUrl; // Update download link
    }, 1000);
  });
  
  document.getElementById("copy-btn").addEventListener("click", function() {
    const thumbnailUrl = document.getElementById("thumbnail").src;
    navigator.clipboard.writeText(thumbnailUrl).then(() => {
      alert("Thumbnail URL copied to clipboard!");
    });
  });
  
  document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
  