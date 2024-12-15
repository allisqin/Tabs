const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
   const header = document.querySelector(headerSelector),
         tab = document.querySelectorAll(tabSelector),
         content = document.querySelectorAll(contentSelector);

   function hideContentTab() {
      content.forEach(item => {
         item.style.display = 'none';
      });
      tab.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   function showContentTab(i=0) {
      content[i].style.display = 'block';
      tab[i].classList.add(activeClass);
   }

   hideContentTab();
   showContentTab();

   header.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
         tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
               hideContentTab();
               showContentTab(i);
            }
         });
      }
   });
};

tabs('.button', '.tab', '.content', 'tab__active');