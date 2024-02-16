function status(request, response) {
  response.status(200).json({ chave: "meu nome é Jonas" });
}

export default status;