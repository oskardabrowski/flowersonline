<div class="thisProductDesc">
            <div class="thisProductDesc-header"><h1 class="standard-header">Więcej informacji</h1></div>
            <div><p><?php echo $p->product_desc; ?></p></div>
            <div class="thisProductDesc-header"><h1 class="standard-header">Galeria</h1></div>
            <div class="thisProductDesc-gallery">
                <?php for($i = 0; $i < count($gallery); $i++ ): ?>
                    <div class="thisProductDesc-gallery-item"><div><img src="img/pictures/exampleImg/<?php echo $gallery[$i]; ?>"></div></div>
                <?php endfor; ?>
            </div>
        </div>