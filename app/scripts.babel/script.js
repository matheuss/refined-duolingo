/**
 * Created by matheus on 6/19/16.
 */
'use strict';

const observer = new MutationObserver(() => {
  const showBotTranslation = $('.toggle-machine-translation:visible');

  if (showBotTranslation.length) {
    if (!$(showBotTranslation).hasClass('active')) {
      $(showBotTranslation).click(); // automatically shows the "DuoBot's translation"
    }
  }
});

var observerConfig = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true
};

//noinspection JSCheckFunctionSignatures
observer.observe(document.body, observerConfig);