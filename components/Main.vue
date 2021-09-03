<template>
  <div class="pb-24 overflow-hidden">
    <div class="flex flex-col items-center h-screen banner">
      <p class="w-80 font-lato-medium text-center text-accent">Deine Job website</p>
      <img src="~/assets/images/main.svg" alt="Banner">
      <svg class="absolute bottom-0" viewBox="0 0 360 70">
        <path d="M 0.134 67.066 C 120.698 84.987 201.675 -27.986 359.54 6.139 L 359.54 69.608 L 0 69.608 L 0.134 67.066 Z" style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255);"/>
      </svg>
    </div>
    <div class="relative w-full flex flex-col justify-center mt-16 tabs">
      <ul id="tabList" class="flex flex-nowrap flex-row  mb-0 list-none">
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a data-tab="1" class="tab-item cursor-pointer text-sm text-teal py-3 bg-white hover:bg-light-teal block rounded-l-xl leading-4	font-lato-semibold" @click="toggleTabs">
            Arbeitnehmer
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a data-tab="2" class="tab-item cursor-pointer text-sm text-teal py-3 bg-white hover:bg-light-teal block leading-4	font-lato-semibold" @click="toggleTabs">
            Arbeitgeber
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a data-tab="3" class="tab-item cursor-pointer text-sm text-teal py-3 bg-white hover:bg-light-teal block rounded-r-xl leading-4	font-lato-semibold" @click="toggleTabs">
            Temporärbüro
          </a>
        </li>
      </ul>
      <div id="moving" class="flex items-center justify-center text-white bg-light-green font-lato-semibold tabs__moving" :class="{'tabs__moving-first' : openTab === 1, 'tabs__moving-last' : openTab === 3}">
        <span :class="{'hidden': openTab !== 1, 'block': openTab === 1}">Arbeitnehmer</span>
        <span :class="{'hidden': openTab !== 2, 'block': openTab === 2}">Arbeitgeber</span>
        <span :class="{'hidden': openTab !== 3, 'block': openTab === 3}">Temporärbüro</span>
      </div>
      <div class="tabs__content" :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
        <h2 class="font-lato-medium text-secondary text-center mx-auto">
          Drei einfache Schritte
          <br />
          zu deinem neuen Job
        </h2>
        <div class="relative mx-auto mt-3.5 -mb-4 tabs__detail">
          <img class="ml-20" src="~/assets/images/1-1.svg" alt="1-1 Image">
          <div class="flex flex-row items-end justify-start font-lato-regular text-primary -mt-12 ml-2.5">
            <p>1.</p>
            <p>Erstellen dein Lebenslauf</p>
          </div>
        </div>
        <div class="relative w-full pb-14 z-0 tabs__detail">
          <svg viewBox="0.344 -0.063 359.422 40.056">
            <path style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);" d="M 0.344 -0.063 L 359.766 0.007 L 359.766 7.313 C 286.397 -8.438 222.206 39.716 148.848 38.512 C 112.49 37.915 75.976 9.509 0.355 1.075 L 0.344 -0.063 Z"></path>
          </svg>
          <svg class="absolute bottom-0" viewBox="0.794 -0.629 359.306 51.754">
            <path d="M 0.794 50.913 C 105.472 14.662 241.636 81.971 360.1 -0.629 L 359.87 51.125 L 0.826 50.91 L 0.794 50.913 Z" style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);"/>
          </svg>
          <div class="mx-auto">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>2.</p>
              <p>Erstellen dein Lebenslauf</p>
            </div>
            <img class="-mt-3" src="~/assets/images/1-2.svg" alt="1-2 Image">
          </div>
        </div>
        <div class="relative -mt-12 mb-6 mx-auto tabs__detail">
          <div class="absolute top-2.5 z-10">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>3.</p>
              <p>Mit nur einem Klick <br/>bewerben</p>
            </div>
            <img class="-mt-12 ml-5" src="~/assets/images/1-3.svg" alt="1-3 Image">
          </div>
        </div>
      </div>
      <div class="tabs__content" :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
        <h2 class="font-lato-medium text-secondary text-center mx-auto">
          Drei einfache Schritte
          <br />
          zu deinem neuen Mitarbeiter
        </h2>
        <div class="relative mx-auto mt-3.5 -mb-4 tabs__detail">
          <img class="ml-20" src="~/assets/images/2-1.svg" alt="2-1 Image">
          <div class="flex flex-row items-end justify-start font-lato-regular text-primary -mt-12 ml-2.5">
            <p>1.</p>
            <p>Erstellen dein Unternehmensprofil</p>
          </div>
        </div>
        <div class="relative w-full pb-14 tabs__detail">
          <svg viewBox="0.344 -0.063 359.422 40.056">
            <path style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);" d="M 0.344 -0.063 L 359.766 0.007 L 359.766 7.313 C 286.397 -8.438 222.206 39.716 148.848 38.512 C 112.49 37.915 75.976 9.509 0.355 1.075 L 0.344 -0.063 Z"></path>
          </svg>
          <svg class="absolute bottom-0" viewBox="0.794 -0.629 359.306 51.754">
            <path d="M 0.794 50.913 C 105.472 14.662 241.636 81.971 360.1 -0.629 L 359.87 51.125 L 0.826 50.91 L 0.794 50.913 Z" style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);"/>
          </svg>
          <div class="mx-auto">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>2.</p>
              <p>Erstellen ein Jobinserat</p>
            </div>
            <img class="ml-6 -mt-16" src="~/assets/images/2-2.svg" alt="2-2 Image">
          </div>
        </div>
        <div class="relative -mt-12 mb-6 mx-auto tabs__detail">
          <div class="absolute top-2.5 z-10">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>3.</p>
              <p>
                Wähle deinen
                <br/>
                neuen Mitarbeiter aus
              </p>
            </div>
            <img class="ml-5 mt-1.5" src="~/assets/images/2-3.svg" alt="2-3 Image">
          </div>
        </div>
      </div>
      <div class="tabs__content" :class="{'hidden': openTab !== 3, 'block': openTab === 3}">
        <h2 class="font-lato-medium text-secondary text-center mx-auto">
          Drei einfache Schritte zur
          <br />
          Vermittlung neuer Mitarbeiter
        </h2>
        <div class="relative mx-auto mt-3.5 -mb-4 tabs__detail">
          <img class="ml-20" src="~/assets/images/3-1.svg" alt="3-1 Image">
          <div class="flex flex-row items-end justify-start font-lato-regular text-primary -mt-12 ml-2.5">
            <p>1.</p>
            <p>Erstellen dein Unternehmensprofil</p>
          </div>
        </div>
        <div class="relative w-full pb-14 tabs__detail">
          <svg viewBox="0.344 -0.063 359.422 40.056">
            <path style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);" d="M 0.344 -0.063 L 359.766 0.007 L 359.766 7.313 C 286.397 -8.438 222.206 39.716 148.848 38.512 C 112.49 37.915 75.976 9.509 0.355 1.075 L 0.344 -0.063 Z"></path>
          </svg>
          <svg class="absolute bottom-0" viewBox="0.794 -0.629 359.306 51.754">
            <path d="M 0.794 50.913 C 105.472 14.662 241.636 81.971 360.1 -0.629 L 359.87 51.125 L 0.826 50.91 L 0.794 50.913 Z" style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);"/>
          </svg>
          <div class="mx-auto">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>2.</p>
              <p>Erhalte Vermittlungs- <br />angebot von Arbeitgeber</p>
            </div>
            <img class="-mt-6" src="~/assets/images/3-2.svg" alt="3-2 Image">
          </div>
        </div>
        <div class="relative -mt-12 mb-6 mx-auto tabs__detail">
          <div class="absolute top-2.5 z-10">
            <div class="flex flex-row items-end justify-start font-lato-regular text-primary">
              <p>3.</p>
              <p>Vermittlung nach Provision oder Stundenlohn</p>
            </div>
            <img class="-mt-1.5" src="~/assets/images/3-3.svg" alt="3-3 Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PinkTabs",
  data() {
    return {
      openTab: 1,
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const tabNumber = this.openTab;
      const elem = document.getElementById('moving');
      this.moveTab(tabNumber, elem);
    },
    toggleTabs(event) {
      const elem = event.currentTarget;
      const tabNumber = elem.getAttribute('data-tab');
      this.openTab = parseInt(tabNumber);
      this.moveTab(tabNumber, elem);
    },
    moveTab(tabNumber, elem) {
      const windowWidth = document.documentElement.clientWidth;
      const elemWidth = elem.getBoundingClientRect().width;
      const tabList = document.getElementById("tabList");
      const movingItem = document.getElementById('moving');

      switch (parseInt(tabNumber)) {
        case 1:
          tabList.style.transform = 'translate(0, 0)';
          movingItem.style.transform = 'translate(20px, -71px)';
          break;
        case 2:
          if (windowWidth >= 520) {
            tabList.style.transform = 'translate(0, 0)';
          } else {
            tabList.style.transform = 'translate(' + ((windowWidth - elemWidth * 3 - 40) / 2).toString() + 'px, 0)';
          }
          movingItem.style.transform =
            'translate(' + ((windowWidth - elemWidth) / 2).toString()+ 'px' + ', -71px)';
          break;
        default:
          if (windowWidth >= 520) {
            tabList.style.transform = 'translate(0, 0)';
          } else {
            tabList.style.transform = 'translate(' + (windowWidth - elemWidth * 3 - 40).toString() + 'px, 0)';
          }
          movingItem.style.transform = 'translate(' + (windowWidth - elemWidth - 20).toString() + 'px' + ', -71px)';
          break;
      }
    }
  }
}
</script>
