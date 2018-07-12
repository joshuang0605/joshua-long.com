<!DOCTYPE html>
<html lang="en">

  <?php include "header.php"; ?> <!--header-->

  <body>
    <!-- <nav>
      <a href="https://joshua-long.com"><i class="fa fa-home"></i></a>
      <a href="blog">BLOG</a>
      <a href="projects">PROJECTS</a>
      <a href="gallery">GALLERY</a>
      <a target="blank" href="Resume.pdf">RESUME</a>
    </nav>nav bar -->
    <?php include "nav.php" ?>
    <main>
      <div class="profile-photo">
          <img src="img/profile.jpg" alt="profile">
      </div>
      <div class="about">
          <p>Hi there, I'm <strong>Joshua Long</strong>, a IT Support / Systems Administrator.</p>
          <p>I love all things related to web development and systems admin.</p>
          <p>Check out some of my previous <a href="#">projects</a>.</p>
          <P>For more info about my work, take a look at my <a href="resume.pdf">resume</a></P>
          <p>Random posts on <a href="blog/index.html">blog</a> and <a href="gallery/index.html">gallery</a>.</p>
      </div>
    </main>
    <?php include "footer.php"; ?>
    
      <!-- javascript and jQuery -->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
      <script src="js/app.js"></script>
  </body>
</html>
