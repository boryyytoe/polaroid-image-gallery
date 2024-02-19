const photographs = ["id/1/960/720", "id/31/960/720", "id/221/960/720", "id/331/960/720", "id/3/960/1280", "id/34/960/720", "id/22/960/720", "id/50/960/1280", "id/1/960/720", "id/31/960/720", "id/221/960/720", "id/331/960/720", "id/3/960/1280", "id/34/960/720", "id/22/960/720" ];

    const imgPath = "https://picsum.photos/";

    const galleryContainer = document.querySelector('gallery');

    for (let i = 0; i < photographs.length; i++) {
        
        const img = new Image();
        const div = document.createElement('div');        
        img.src = imgPath + photographs[i];
    
        // Add an onload event listener to get the width and height after the image has loaded
        img.onload = function() {
        
        const width = this.width;
        const height = this.height;

        if (height > width) {
            div.classList.add("vertical");
        }    
        }; 
        
        div.appendChild(img);  
        
        //document.body.appendChild(div);    
        //document.getElementById('ImageGallery').appendChild(div);
        document.querySelector('.gallery').appendChild(div);
        
        // If the image fails to load, handle the error
        img.onerror = function() {
            console.error("Failed to load image:", this.src);
        };

    }