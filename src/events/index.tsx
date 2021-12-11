const openSideNav = () => {
    document.querySelector('#NavTopOpenBtn')?.addEventListener('click', () => {
        document.querySelector('#NavSide')?.classList.add('active')
        document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.add('active'))
    })
}

const closeSideNav = () => {
    document.querySelector('#NavSideCloseBtn')?.addEventListener('click', () => {
        removeSideNavActive()
    })
}

const removeOverlay = () => {
    const overlays = document.querySelectorAll('.overlay')
    overlays?.forEach(overlay => {
        overlay.addEventListener('click', () => {
            removeSideNavActive()
        })
    })
}

const removeSideNavActive = () => {
    document.querySelector('#NavSide')?.classList.remove('active')
    document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.remove('active'))
}

const openSideNavTopic = (topic: string) => {
    document.querySelector(`#${topic}`)?.classList.add('chosen-wing');
    document.querySelector('#NavSideMainMenu')?.classList.add('left-wing');
    document.querySelector('#NavSideMainMenu')?.classList.remove('right-wing');

}

const closeSideNavTopic = (topic: string) => {
    document.querySelector(`#${topic}`)?.classList.add('right-wing');
    document.querySelector(`#${topic}`)?.classList.remove('chosen-wing');
    document.querySelector('#NavSideMainMenu')?.classList.remove('left-wing');

}

const darkLightMode = () => {
    const html = document.getElementsByTagName("html")[0];   // Get the html element in the document
    const att = document.createAttribute(`data-theme`);       // Create a attribute
    att.value = "light";                           // Set the value of the attribute
    html.setAttributeNode(att);

    const checkbox: any = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }
}

export { openSideNav, closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic, darkLightMode }
