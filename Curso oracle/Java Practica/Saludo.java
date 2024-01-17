import java.util.Scanner;


public class Saludo{
    public static void main(String args[]){
	Scanner in = new Scanner(System.in);
	String nombre = "";

	System.out.println("¿Cual es tu nombre?");
	nombre = in.nextLine();

	System.out.println("Hola " + nombre);


    }
}