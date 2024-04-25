// document.querySelectorAll('[data-tooltip]').forEach(item => {
//     console.log('Adding mouseover event listener to item:', item);
//     item.addEventListener('mouseover', event => {
//         console.log('Mouseover event triggered for item:', event.target);
//         let tooltip = document.createElement('div');
//         tooltip.classList.add('tooltip');
//         tooltip.innerText = event.target.getAttribute('data-tooltip');
//         document.body.appendChild(tooltip);
//         console.log('Tooltip created and added to body:', tooltip);

//         let rect = event.target.getBoundingClientRect();
//         tooltip.style.left = rect.left + 'px';
//         tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';
//         console.log('Tooltip positioned at:', tooltip.style.left, tooltip.style.top);

//         event.target.addEventListener('mouseout', () => {
//             console.log('Mouseout event triggered for item:', event.target);
//             document.body.removeChild(tooltip);
//             console.log('Tooltip removed from body');
//         }, { once: true });
//     });
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll('[data-tooltip]').forEach(item => {
//         console.log('Adding mouseover event listener to item:', item);
//         item.addEventListener('mouseover', event => {
//             console.log('Mouseover event triggered for item:', event.target);
//             let tooltip = document.createElement('div');
//             tooltip.classList.add('tooltip');
//             tooltip.innerText = event.target.getAttribute('data-tooltip');
//             document.body.appendChild(tooltip);
//             console.log('Tooltip created and added to body:', tooltip);

//             let rect = event.target.getBoundingClientRect();
//             tooltip.style.left = rect.left + 'px';
//             tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';
//             console.log('Tooltip positioned at:', tooltip.style.left, tooltip.style.top);

//             event.target.addEventListener('mouseout', () => {
//                 console.log('Mouseout event triggered for item:', event.target);
//                 document.body.removeChild(tooltip);
//                 console.log('Tooltip removed from body');
//             }, { once: true });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('[data-tooltip]').forEach(item => {
        console.log('Adding mouseover event listener to item:', item);
        item.addEventListener('mouseover', event => {
            console.log('Mouseover event triggered for item:', event.target);
            let tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = event.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            console.log('Tooltip created and added to body:', tooltip);

            let rect = event.target.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = window.pageYOffset + rect.top - tooltip.offsetHeight - 6 + 'px'; //move up by 3 px
            console.log('Tooltip positioned at:', tooltip.style.left, tooltip.style.top);

            event.target.addEventListener('mouseout', () => {
                console.log('Mouseout event triggered for item:', event.target);
                document.body.removeChild(tooltip);
                console.log('Tooltip removed from body');
            }, { once: true });
        });
    });
});


