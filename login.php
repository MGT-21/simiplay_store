<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./imagens/ico pessoa.png" type="image/x-icon">

    <link rel="stylesheet" href="./bootstrap/css-bootstrap/bootstrap.min.css">

    <link rel="stylesheet" href="./style/reset.css">
    <link rel="stylesheet" href="./style/vars.css">
    <link rel="stylesheet" href="./style/login.css">
    <title>Login page</title>
</head>
<body class="container-fluid">

  <div class="row">
    <div method="POST"  class="conteudo-img col-sm-6 col-xl-8">
    </div>
  
    <form action="teste-login.php" method="POST" class="col-sm-6 col-xl-4 py-5 px-4 d-flex flex-column justify-content-center">

      <img src="./imagens/logo.png" alt="">

      <h2 class="h2 mb-4 text-center">Login</h2>

      <div class="form-group">
        <label for="exampleInputEmail1" class="mb-2 h5">E-mail</label>

        <input type="email" name="email" class="form-control custom-input padding-1rem py-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email aqui">
      </div>
  
      <div class="form-group">
        <label for="exampleInputPassword1" class="mb-2 h5">Senha</label>

        <input type="password" name="password" class="form-control custom-input py-4" id="exampleInputPassword1" 
        placeholder="Digite sua senha aqui">
      </div>
  
      <div class="form-group custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        
        <label class="custom-control-label" for="customCheck1">lembrar de mim</label>
      </div>
      
      <button type="submit" name="submit" class="btn btn-warning btn-block border-0 btn-lg">Log in</button>
  
      <a href="#" class="d-block text-center text-white mb-4">Esqueci minha senha</a>
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    
  <script src="./bootstrap/js-bootstrap/bootstrap.min.js"></script>
</body>
</html>