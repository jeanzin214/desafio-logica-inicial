let heroi = 'jean'
let xp = 10001
let ranking = ''

if (xp <= 1000){
    ranking = 'ferro';
}
else if (xp >= 1001 && xp <= 2000){
	ranking = 'bronze';
}
else if ( xp >= 2001 && xp <= 5000){
	ranking = 'prata';
}
else if (xp >= 5001 && xp <= 7000){
	ranking = 'ouro';
}
else if (xp >= 7001 && xp <= 8000){
	ranking = 'platina';
}
else if (xp >= 8001 && xp <= 9000){
	ranking = 'ascendente';
}
else if (xp >= 9001 && xp <= 10000){
	ranking = 'imortal';
}
else if( xp >= 10000){
	ranking = 'radiante';
}
else{
	ranking = 'indefinido';}

switch(ranking){
	case 'ferro':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'bronze':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'prata':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'platina':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'ascendente':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'imortal':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'radiante':
    console.log('o heroi ' + heroi + ' está no nivel ' + ranking + ' com um total de xp de ' + xp + ' pontos de experiência.')
break;
	case 'indefinido':
    console.log('ocorreu um erro ao identificar seu nivel.' )
break;}
