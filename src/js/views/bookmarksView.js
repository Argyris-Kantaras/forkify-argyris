import View from './view';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class bookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmarks added yet. Please find a recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new bookmarksView();
