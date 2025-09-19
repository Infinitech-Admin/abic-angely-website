"use client"
import { useState, useEffect } from "react"

const GoogleTranslate = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script")
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Translate
    ;(window as any).googleTranslateElementInit = () => {
      ;new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element",
      )
      
      // Small delay to ensure the widget is fully rendered
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="translate.google.com"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const handleTranslateClick = () => {
    if (!isLoaded) return;
    
    // Try multiple selectors to find the Google Translate button
    const selectors = [
      '.goog-te-gadget-simple .goog-te-menu-value',
      '.goog-te-gadget-simple',
      '#google_translate_element .goog-te-gadget-simple',
      '#google_translate_element .goog-te-menu-value'
    ];
    
    for (const selector of selectors) {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.click();
        break;
      }
    }
  };

  return (
    <div className="mt-4">
      <div 
        className="flex items-center p-3 rounded-lg cursor-pointer border-2 border-purple-500 text-purple-400 font-bold shadow-md transition-all duration-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.7)] relative overflow-hidden"
        onClick={handleTranslateClick}
      >
        
        {/* Translation Icon */}
        <svg 
          className="w-5 h-5 text-purple-400 mr-2" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
        </svg>
        
        <span className="tracking-wide">Translate</span>
        
        {/* Hidden Google Translate Element - positioned for interaction */}
        <div id="google_translate_element" className="absolute top-0 left-0 w-full h-full opacity-0 z-10"></div>
      </div>
      
      {!isLoaded && (
        <div className="text-purple-400/70 text-xs mt-2 text-center">Loading translator...</div>
      )}
      
      <style jsx global>{`
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          position: absolute !important;
          z-index: -1 !important;
        }
        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          font-size: 14px !important;
          color: #a855f7 !important;
          width: 100% !important;
          min-height: 48px !important;
          display: flex !important;
          align-items: center !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          font-weight: 700 !important;
          letter-spacing: 0.025em !important;
          border: 2px solid #a855f7 !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }
        .goog-te-gadget-simple:hover {
          color: #c084fc !important;
          border-color: #c084fc !important;
          box-shadow: 0 0 10px 2px rgba(168, 85, 247, 0.7) !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value {
          color: inherit !important;
          font-weight: inherit !important;
          font-size: inherit !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: "🌐" !important;
          margin-right: 4px !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
          color: inherit !important;
          font-weight: inherit !important;
          font-size: inherit !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          color: inherit !important;
          font-weight: inherit !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span:nth-child(2) {
          display: none !important;
        }
        .goog-te-gadget-icon {
          display: none !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-menu-frame {
          max-height: 400px !important;
          overflow-y: auto !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          border: 1px solid rgba(168, 85, 247, 0.2) !important;
        }
        .goog-te-menu2 {
          border-radius: 12px !important;
          overflow: hidden !important;
          background: white !important;
        }
        .goog-te-menu2-item {
          padding: 12px 20px !important;
          font-size: 14px !important;
          transition: background-color 0.2s ease !important;
        }
        .goog-te-menu2-item:hover {
          background-color: #f3f4f6 !important;
        }
      `}</style>
    </div>
  )
}

export default GoogleTranslate
