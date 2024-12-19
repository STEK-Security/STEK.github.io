// n8n Flow Trigger 버튼 클릭 이벤트
document.getElementById('trigger-flow').addEventListener('click', () => {
    // Webhook URL (보안상 노출에 주의 필요)
    const webhookUrl = 'https://n8n.stek.lan/webhook/7d4c52b8-6e5c-4564-9d24-edba581bdd3c';

    // Webhook 호출
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Agent button clicked' }) // 전달할 데이터
    })
    .then(response => {
        if (response.ok) {
            alert('n8n Workflow triggered successfully!');
        } else {
            alert('Failed to trigger n8n Workflow.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while triggering the workflow.');
    });
});
