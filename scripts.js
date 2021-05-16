var user = parseInt(prompt("What is your weight?"));
var weight = user ;
var planet = prompt("Choose your planet\n1 es Mercurio\n2 es Venus\n3 es Marte\n4 es Jupiter\n5 es Saturno\n6 es Urano\n7 es Neptuno\n8 es Pluton");
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.807;
var g_marte = 3.721;
var g_jupiter = 24.79;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;
var g_pluton = 0.62;
var final_weight;
var p_name;
if(planet == 1)
{
    final_weight = weight * g_mercurio / g_tierra;
    p_name = "Mercurio";
}
else if(planet == 2)
{
    final_weight = weight * g_venus / g_tierra;
    p_name = "Venus";
}
else if(planet == 3)
{
    final_weight = weight * g_marte / g_tierra;
    p_name = "Marte";
}
else if(planet == 4)
{
    final_weight = weight * g_jupiter / g_tierra;
    p_name = "Jupiter";
}
else if(planet == 5)
{
    final_weight = weight * g_saturno / g_tierra;
    p_name = "Saturno";
}
else if(planet == 6)
{
    final_weight = weight * g_urano / g_tierra;
    p_name = "Urano";
}
else if(planet == 7)
{
    final_weight = weight * g_neptuno / g_tierra;
    p_name = "Neptuno";
}
else if(planet == 8)
{
    final_weight = weight * g_pluton / g_tierra;
    p_name = "Pluton";
}
final_weight = parseInt(final_weight);

document.write("Your Weight On "+ p_name +" Is <strong>"+final_weight+"</strong> Kg");
