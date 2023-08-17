document.addEventListener('DOMContentLoaded', function() {
    //----------------SIDEBAR------------------
    const removeSidebarCheckbox = document.getElementById('removeSidebarCheckbox');
    // Load user preference and update checkbox state
    browser.storage.local.get('removeSidebarSetting', result => {
      const removeSidebarSetting = result.removeSidebarSetting || false;
      removeSidebarCheckbox.checked = removeSidebarSetting;
    });
    // Update user preference when checkbox changes
    removeSidebarCheckbox.addEventListener('change', () => {
      const newSetting = removeSidebarCheckbox.checked;
      console.log("3: "+newSetting);
      browser.storage.local.set({ "removeSidebarSetting" : newSetting });
    });

    //-------------------THREE COLUMNS------------
    // Load user preference and update checkbox state
    browser.storage.local.get('threeColumnsSetting', result => {
        const threeColumnsSetting = result.threeColumnsSetting || false;
        threeColumnsCheckbox.checked = threeColumnsSetting;
        });
    // Update user preference when checkbox changes
    threeColumnsCheckbox.addEventListener('change', () => {
      const newSetting = threeColumnsCheckbox.checked;
      console.log("3: "+newSetting);
      browser.storage.local.set({ "threeColumnsSetting" : newSetting });
    });
    
    //-----------------TOP PANEL------------
    // Load user preference and update checkbox state
    browser.storage.local.get('removeTopTrashSetting', result => {
        const removeTopTrashSetting = result.removeTopTrashSetting || false;
        removeTopTrashCheckbox.checked = removeTopTrashSetting;
        });
    // Update user preference when checkbox changes
    removeTopTrashCheckbox.addEventListener('change', () => {
      const newSetting = removeTopTrashCheckbox.checked;
      console.log("3: "+newSetting);
      browser.storage.local.set({ "removeTopTrashSetting" : newSetting });
    });
    
    //-----------------AUTHOR and COMMENTS LINKS------------
    // Load user preference and update checkbox state
    browser.storage.local.get('removeCommentsLinkSetting', result => {
        const removeCommentsLinkSetting = result.removeCommentsLinkSetting || false;
        removeCommentsLinkCheckbox.checked = removeCommentsLinkSetting;
        });
    // Update user preference when checkbox changes
    removeCommentsLinkCheckbox.addEventListener('change', () => {
      const newSetting = removeCommentsLinkCheckbox.checked;
      console.log("3: "+newSetting);
      browser.storage.local.set({ "removeCommentsLinkSetting" : newSetting });
    });
    
    //-----------------TAGS / CATEGORY on top of posts------------
    // Load user preference and update checkbox state
    browser.storage.local.get('removeTagsSetting', result => {
        const removeTagsSetting = result.removeTagsSetting || false;
        removeTagsCheckbox.checked = removeTagsSetting;
        });
    // Update user preference when checkbox changes
    removeTagsCheckbox.addEventListener('change', () => {
      const newSetting = removeTagsCheckbox.checked;
      console.log("3: "+newSetting);
      browser.storage.local.set({ "removeTagsSetting" : newSetting });
    });
    
    //-----------------REACTION below articles------------
    // Load user preference and update checkbox state
    browser.storage.local.get('removeSimilarSetting', result => {
      const removeSimilarSetting = result.removeSimilarSetting || false;
      removeSimilarCheckbox.checked = removeSimilarSetting;
      });
  // Update user preference when checkbox changes
    removeSimilarCheckbox.addEventListener('change', () => {
    const newSetting = removeSimilarCheckbox.checked;
    browser.storage.local.set({ "removeSimilarSetting" : newSetting });
  });
  });