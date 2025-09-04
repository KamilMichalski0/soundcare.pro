/* ===========================================
   MAIN JAVASCRIPT FILE - CONSOLIDATED CODE
   =========================================== */

// ===========================================
// GOOGLE TAG MANAGER INITIALIZATION
// ===========================================
(function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WR3WBHM8');

// ===========================================
// GOOGLE ANALYTICS CONFIGURATION
// ===========================================
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configure multiple GA tracking IDs
gtag('config', 'G-2MGMR87VXR');
gtag('config', 'G-RLRKBBT2VC');

// ===========================================
// GOOGLE ANALYTICS EVENTS
// ===========================================

// Scroll tracking event
gtag('event', 'scroll', {
  // <event_parameters>
});

// User engagement event
gtag('event', 'user_engagement', {
  // <event_parameters>
});

// First visit event
gtag('event', 'first_visit', {
  // <event_parameters>
});

// Session start event
gtag('event', 'session_start', {
  // <event_parameters>
});

// Page view event
gtag('event', 'page_view', {
  // <event_parameters>
});

// ===========================================
// GTAG EVENT HELPER FUNCTIONS
// ===========================================

// Helper function for qualify_lead event
function gtagSendEventQualifyLead(url) {
    var callback = function () {
        if (typeof url === 'string') {
            window.location = url;
        }
    };
    gtag('event', 'qualify_lead', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
    });
    return false;
}

// Helper function for close_convert_lead event
function gtagSendEventCloseConvertLead(url) {
    var callback = function () {
        if (typeof url === 'string') {
            window.location = url;
        }
    };
    gtag('event', 'close_convert_lead', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
    });
    return false;
}

// Helper function for form_submit event
function gtagSendEventFormSubmit(url) {
    var callback = function () {
        if (typeof url === 'string') {
            window.location = url;
        }
    };
    gtag('event', 'form_submit', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
    });
    return false;
}

// Helper function for form_start event
function gtagSendEventFormStart(url) {
    var callback = function () {
        if (typeof url === 'string') {
            window.location = url;
        }
    };
    gtag('event', 'form_start', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
    });
    return false;
}

// ===========================================
// MOBILE BUSINESS TYPES FIX
// ===========================================

// Force mobile business types fix immediately on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const businessTypeItems = document.querySelectorAll('.business-type-item');
        
        businessTypeItems.forEach(item => {
            // Apply white background and dark text for all items
            item.style.setProperty('background', 'white', 'important');
            item.style.setProperty('color', '#374151', 'important');
            item.style.setProperty('border', '1px solid rgba(0, 0, 0, 0.1)', 'important');
            
            // Style spans
            const span = item.querySelector('span');
            if (span) {
                span.style.setProperty('color', '#374151', 'important');
                span.style.setProperty('opacity', '1', 'important');
                span.style.setProperty('visibility', 'visible', 'important');
                span.style.setProperty('display', 'block', 'important');
            }
            
            // Style icons
            const icon = item.querySelector('.business-icon');
            if (icon) {
                icon.style.setProperty('color', '#2563eb', 'important');
                icon.style.setProperty('background', 'rgba(37, 99, 235, 0.1)', 'important');
                icon.style.setProperty('opacity', '1', 'important');
                icon.style.setProperty('visibility', 'visible', 'important');
                icon.style.setProperty('display', 'flex', 'important');
            }
            
            // Special styling for active items
            if (item.classList.contains('active')) {
                item.style.setProperty('border', '2px solid #2563eb', 'important');
                item.style.setProperty('background', 'white', 'important');
                item.style.setProperty('color', '#374151', 'important');
                item.style.setProperty('box-shadow', '0 4px 8px rgba(37, 99, 235, 0.1)', 'important');
                
                if (span) {
                    span.style.setProperty('color', '#374151', 'important');
                    span.style.setProperty('font-weight', '600', 'important');
                }
                
                if (icon) {
                    icon.style.setProperty('color', '#2563eb', 'important');
                    icon.style.setProperty('background', 'rgba(37, 99, 235, 0.15)', 'important');
                    icon.style.setProperty('border', '2px solid #2563eb', 'important');
                }
            }
        });
        
        console.log('Mobile business types fix applied on page load');
    }
});

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Generic gtag event sender (consolidated function)
function gtagSendEvent(url, eventName) {
    var callback = function () {
        if (typeof url === 'string') {
            window.location = url;
        }
    };
    
    gtag('event', eventName || 'conversion', {
        'event_callback': callback,
        'event_timeout': 2000
    });
    
    return false;
}