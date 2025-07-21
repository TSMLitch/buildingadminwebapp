document.getElementById('monitoringForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const team = document.getElementById('team').value;
  const report = document.getElementById('report').value;
  const timestamp = new Date().toISOString();

  const data = {
    team: team,
    report: report,
    time: timestamp
  };

  const fileName = `${team}_${timestamp}.json`;

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();

  alert('Report saved! You can upload it to OneDrive.');
});
