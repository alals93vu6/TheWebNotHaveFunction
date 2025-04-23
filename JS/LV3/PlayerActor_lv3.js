import { TextManager } from './TextManager_lv3.js';
import { DragPass,DragFailed,DragNone } from './GameManager_lv3.js';

window.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    const trashBin = document.getElementById('trashBin');

    const container = document.querySelector('.wordContainer');
    const containerRect = container.getBoundingClientRect();

    TextManager.recordOriginalPositions(); // 初始化記錄位置

    words.forEach(word => {
        const id = word.id;

        word.addEventListener('mousedown', (e) => {
            const offsetX = e.offsetX;
            const offsetY = e.offsetY;

            function onMouseMove(e) {
                word.style.left = `${e.clientX - containerRect.left - offsetX}px`;
                word.style.top = `${e.clientY - containerRect.top - offsetY}px`;
                word.style.zIndex = 1000;
            }

            function onMouseUp(e) {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                const wordRect = word.getBoundingClientRect();
                const trashRect = trashBin.getBoundingClientRect();

                const isInTrash =
                    wordRect.right > trashRect.left &&
                    wordRect.left < trashRect.right &&
                    wordRect.bottom > trashRect.top &&
                    wordRect.top < trashRect.bottom;

                const id = word.id;

                if (isInTrash) {
                    word.style.display = "none";
                }
                
                // ✅ 不管有沒有丟進垃圾桶，都執行檢查
                TextManager.checkStatus(
                    () => DragPass(),
                    () => {
                        isInTrash ? DragFailed() : DragNone();
                
                        const pos = TextManager.originalPositions[id];
                        if (pos) {
                            word.style.left = pos.left;
                            word.style.top = pos.top;
                            word.style.display = "block";
                        }
                    }
                );
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});