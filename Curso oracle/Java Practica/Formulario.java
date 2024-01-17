import javax.swing.*;
import java.awt.event.*;

public class Formulario extends JFrame implements ActionListener{
  
  private JLabel label1, label2, label3, labeltext;
  private JButton boton1, boton2, boton3, botonText;
  private JTextField textfield1;

  public Formulario(){
    setLayout(null);
    label1 = new JLabel("Interfaz Grafica.");
    label1.setBounds(10,20,300,20);
    add(label1);
    label2 = new JLabel("Version 1.0");
    label2.setBounds(10,100,100,20);
    add(label2);
    label3 = new JLabel("En espera...");
    label3.setBounds(10,150,300,20);
    add(label3);
    labeltext = new JLabel("Usuario:");
    labeltext.setBounds(10, 250, 150, 20);
    add(labeltext);

    textfield1 = new JTextField();
    textfield1.setBounds(150, 250, 100, 20);
    add(textfield1);

    botonText = new JButton("Aceptar");
    botonText.setBounds(150, 280, 100, 20);
    add(botonText);
    botonText.addActionListener(this);

    boton1 = new JButton("1");
    boton1.setBounds(10, 200, 90, 20);
    add(boton1);
    boton1.addActionListener(this);

    boton2 = new JButton("2");
    boton2.setBounds(110, 200, 90, 20);
    add(boton2);
    boton2.addActionListener(this);

    boton3 = new JButton("3");
    boton3.setBounds(210, 200, 90, 20);
    add(boton3);
    boton3.addActionListener(this);
  }

  public void actionPerformed(ActionEvent e){
    if(e.getSource() == boton1){
      label3.setText("Has presionado el boton 1");
    }
    if(e.getSource() == boton2){
      label3.setText("Has presionado el boton 2");
    }
    if(e.getSource() == boton3){
      label3.setText("Has presionado el boton 3");
    }
    
    if(e.getSource() == botonText){
      String usuario = textfield1.getText();
      setTitle(usuario);
    }
  }

  public static void main(String args[]){
    Formulario formulario1 = new Formulario();
    formulario1.setBounds(0,0,400,400);
    formulario1.setResizable(false);
    formulario1.setVisible(true);
    formulario1.setLocationRelativeTo(null);
  }
}