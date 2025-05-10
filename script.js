let points = 1000; // رصيد افتراضي

function placeBet(team) {
    if (points >= 50) {
        points -= 50;
        alert(`تم الرهان على ${team}! الرصيد المتبقي: ${points}`);
    } else {
        alert("رصيدك نفد!");
    }
}