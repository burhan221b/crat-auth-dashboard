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

export { openSideNav, closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic }
