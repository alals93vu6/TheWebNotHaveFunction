export const TextManager = (() => {
    const correctWordId = "W5"; // 正確要被丟進垃圾桶的字
    const wordIds = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    const originalPositions = {}; // 記錄初始位置

    // 初始化位置（供 Player 拖曳初始化使用）
    function recordOriginalPositions() {
        const container = document.querySelector('.wordContainer');
        const containerRect = container.getBoundingClientRect(); // ✅ 在外面一次取得
    
        wordIds.forEach(id => {
            const word = document.getElementById(id);
            if (word) {
                const wordRect = word.getBoundingClientRect();
    
                // 轉為相對容器的 px 座標
                const left = `${wordRect.left - containerRect.left}px`;
                const top = `${wordRect.top - containerRect.top}px`;
    
                originalPositions[id] = { left, top };
    
                // 寫回實際樣式，確保從這一刻起 style.left/top 是 px
                word.style.left = left;
                word.style.top = top;
    
                // ✅ 用來 debug 看有沒有成功
                console.log(`${id} 初始位置`, left, top);
            }
        });
    
        console.table(originalPositions); // 顯示整個字典
    }

    // 呼叫時檢查目前文字狀態
    function checkStatus(onPass, onFail) {
        const hiddenWords = wordIds.filter(id => {
            const el = document.getElementById(id);
            return el && el.style.display === "none";
        });
    
        const isOnlyCorrectHidden =
            hiddenWords.length === 1 && hiddenWords[0] === correctWordId;
    
        if (isOnlyCorrectHidden) {
            onPass(); // 通關事件
        } else {
            // ✅ 新增：還原所有文字狀態，不管有沒有被丟進垃圾桶
            wordIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.display = "block";
                    const pos = originalPositions[id];
                    if (pos) {
                        el.style.left = pos.left;
                        el.style.top = pos.top;
                    }
                }
            });
    
            onFail(); // 失敗事件
        }
    }

    return {
        recordOriginalPositions,
        checkStatus
    };
})();
