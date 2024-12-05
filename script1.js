document.getElementById('uploadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('imageUpload');
    if (!fileInput.files.length) {
      alert('Please upload an ECG image!');
      return;
    }
  
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
  
    // Simulate prediction delay
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('results').style.display = 'block';
  
      // Generate random percentages
      const randomPercentages = Array.from({ length: 4 }, () => Math.random() * 100);
  
      // Display results
      document.getElementById('class1').textContent = randomPercentages[0].toFixed(2);
      document.getElementById('class2').textContent = randomPercentages[1].toFixed(2);
      document.getElementById('class3').textContent = randomPercentages[2].toFixed(2);
      document.getElementById('class4').textContent = randomPercentages[3].toFixed(2);
    }, Math.random() * 3000 + 2000); // Random delay between 2-5 seconds
  });
  