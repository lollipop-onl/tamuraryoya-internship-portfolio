$(function() {
	$.getJSON('works.json', function(json) {
		var html = '';
		for(var i=0, ilen=json.length; i<ilen; i++) {
			var data = json[i];
			if(data) {
				html += '<li><session class="item-card">'
					  + '<div class="eyecatch"><div class="eyecatch-img">'
					  + '<img src="img/' + data.id + '/eyecatch.png" alt="' + data.name + '">'
					  + '</div></div>'
					  + '<div class="content">'
					  + '<h2>' + data.name + '</h2>'
					  + '<div class="details">'
					  + '<div class="details-item"><span class="label">Release</span><span class="text">' + data.release + '</span></div>'
					  + '<div class="details-item"><span class="label">Device</span>' + getDevice(data.device) + '</div>'
					  + '<div class="details-item"><span class="label">Production time</span><span class="text">' + data.period + '</span></div>'
					  + '<div class="details-item"><span class="label">URL</span><span class="link">' + getLink(data.url) + '</span></div>'
					  + '</div></div>'
					  + '<div class="body">'
					  + '<div class="body-item sentence"><span class="label">Comment</span>' + getComment(data.comment) + '</div>'
					  + '<div class="body-item gallery">' + getGallery(data.gallery, data.id) + '</div>'
					  + '</div>'
					  + '</session></li>';
			}
		}
		$('#works').append(html);
	});

	function getDevice(devices) {
		var html = '';
		var flag = true;
		if(devices.mobile) {
			html += '<span class="icon ion-iphone"></span>';
			flag = false;
		}
		if(devices.pc) {
			html += '<span class="icon ion-monitor"></span>';
			flag = false;
		}
		if(false) {

		}
		return html;
	}

	function getLink(url) {
		if(url != 'private') {
			return '<a href="' + url + '" target="_blank">' + url + '</a>';
		}
		return '<span class="private">Private</span>';
	}

	function getComment(comments) {
		var html = '';
		for(var i=0, len=comments.length; i<len; i++) {
			html += '<p>' + comments[i] + '</p>';
		}
		return html;
	}

	function getGallery(gallery, id) {
		if(gallery) {
			var html = '';
			for(var i=0, len=gallery.length; i<len; i++) {
				var item = gallery[i];
				html += '<a href="img/' + id + '/' + item.src + '" rel="lightbox[group' + id + ']" data-title="' + item.capture + '">'
					  + '<div class="thumb" style="background-image: url(img/' + id + '/' + item.src + ')">' + item.capture + '</div>'
					  + '</a>'
			}
			return html;
		}
		return '';
	}
});
