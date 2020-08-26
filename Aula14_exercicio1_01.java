		/* 1. Um funcionário de uma empresa recebe aumento salarial anualmente.
		Sabe-se que: 
		Esse funcionário foi contratado em 1995, com o salário inicial de R$1000,00;
		Em 1996 recebeu um aumento de 1,5% sobre o seu salário inicial;
		A partir de 1997 (inclusive), os aumentos salariais sempre corresponderam 
		ao dobro do percentual do ano anterior (OBS: considerei aqui que o aumento dobra a cada ano).
		Faça um programa que determine o salário atual desse funcionário.
		*/

import java.util.Locale;
import java.util.Scanner;

public class Aula14_exercicio01 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		System.out.println("Digite o ano atual: ");
		
		int anoCorrente = sc.nextInt();
		double aumento = 0.015;
		double salario = 1000;

		for (int i = 1995; i <= anoCorrente; i++) {

			if (i == 1995) {
				salario = 1000.0;
			}
			else if (i == 1996) {
				salario *= (1 + aumento);
			}
			else {
				aumento *= 2;
				salario *= (1 + aumento);
			}

			System.out.printf("Ano: %d | Salário: R$ %.2f%n", i, salario);

			sc.close();
		}
	}
}
