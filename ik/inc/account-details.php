<div class="account-body-details">
                <div class="account-body-details-header"><h1 class="standard-header">Dane użytkownika</h1></div>
                <div class="account-body-details-img"><img src="img/users/<?php
                    if(isset($data->user_img)) {echo $data->user_img; } else {echo 'defaultImg.jpg';};
                    ?>"></div>
                <div class="account-body-details-form">
                    <form action="php/update-details.php" method="POST" enctype="multipart/form-data">
                        <input type="text" value="<?php print_r($_SESSION['user_id'])?>" class="dnone" name="id" readonly>
                        <label for="name">Zaktualizuj nazwę użytkownika:</label>
                        <input id="name" type="text" name="name" placeholder="Nazwa użytkownika" value="<?php
                        if(isset($data->user_name)) {echo $data->user_name; } else {echo '';};
                        ?>" required>
                        <label for="name">Zaktualizuj grafikę:</label>
                        <input id="file" type="file" name="image">
                        <label for="name">Zaktualizuj opis:</label>
                        <textarea id="desc" name="desc" placeholder="Napisz nam coś o sobie" required><?php if(isset($data->user_desc)) {echo $data->user_desc; } else {echo '';};?></textarea>
                        <button type="submit" class="standard-btn account-body-details-form-submit">Zapisz Dane</button>
                    </form>
                </div>
            </div>