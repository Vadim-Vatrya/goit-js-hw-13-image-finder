import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, success } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'dark';

function showError() {
  return error({
    title: 'Картинка отсутствует, уточните запрос!',
    hide: true,
    delay: 2000,
  });
}

function showSuccess() {
  return success({
    title: 'картинка найдена, приятного просмотра!',
    hide: true,
    delay: 2000,
  });
}

export { showError, showSuccess };
