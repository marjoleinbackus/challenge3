$(document).ready(function() {
      search_tokyo()
      search_kyoto()
      search_sapporo()
      search_fukuoka()
    })

function search_tokyo() {
  $.ajax({
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data: {
      q: "tokyo+landscape",
      key: '2409187-ee958c2d8895c6eb14d3ce314',
      per_page: "6"
    },
    success: handleResults_tokyo
  })
}

function handleResults_tokyo(response_data) {
  response_data.hits.forEach(function(item) {
    var url = item.webformatURL
    var image = $(document.createElement('img'));
    image.attr('src', url)
    image.appendTo("#tokyo")
  })
}

// don't know how to make handleResults appendTo different IDs based on search parameter :( 

function search_kyoto() {
  $.ajax({
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data: {
      q: "kyoto+landscape",
      key: '2409187-ee958c2d8895c6eb14d3ce314',
      per_page: "6"
    },
    success: handleResults_kyoto
  })
}

function handleResults_kyoto(response_data) {
  response_data.hits.forEach(function(item) {
    var url = item.webformatURL
    var image = $(document.createElement('img'));
    image.attr('src', url)
    image.appendTo("#kyoto")
  })
}

// duplicate again for another city

function search_sapporo() {
  $.ajax({
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data: {
      q: "sapporo+landscape",
      key: '2409187-ee958c2d8895c6eb14d3ce314',
      per_page: "6"
    },
    success: handleResults_sapporo
  })
}

function handleResults_sapporo(response_data) {
  response_data.hits.forEach(function(item) {
    var url = item.webformatURL
    var image = $(document.createElement('img'));
    image.attr('src', url)
    image.appendTo("#sapporo")
  })
}

// duplicate again for another city

function search_fukuoka() {
  $.ajax({
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data: {
      q: "fukuoka",
      key: '2409187-ee958c2d8895c6eb14d3ce314',
      per_page: "3"
    },
    success: handleResults_fukuoka
  })
}

function handleResults_fukuoka(response_data) {
  response_data.hits.forEach(function(item) {
    var url = item.webformatURL
    var image = $(document.createElement('img'));
    image.attr('src', url)
    image.appendTo("#fukuoka")
  })
}