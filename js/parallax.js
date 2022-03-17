(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax-banner");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${49 - (_mouseX - _w) * 0.01}% ${10 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${49 - (_mouseX - _w) * 0.02}% ${10 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${49 - (_mouseX - _w) * 0.06}% ${10 - (_mouseY - _h) * 0.01}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();