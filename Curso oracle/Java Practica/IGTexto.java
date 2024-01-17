import javax.swing.*;
import java.awt.event.*;

public class IGTexto extends JFrame implements ActionListener{
    
    private JTextField textfield1;
    private JTextArea textarea1;
    private JScrollPane scrollpane1;
    private JButton boton1;

    String texto = "";

    public IGTexto(){
        setLayout(null);
        textfield1 = new JTextField();
        textfield1.setBounds(10, 10, 200, 30);
        add(textfield1);

        boton1 = new JButton("agregar");
        boton1.setBounds(250, 0, 100, 30);
        add(boton1);
        boton1.addActionListener(this);

        textarea1 = new JTextArea();
        scrollpane1 = new JScrollPane(textarea1);
        scrollpane1.setBounds(10, 50, 400, 300);
        add(scrollpane1);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == boton1){
            texto += textfield1.getText() + "\n";
            textarea1.setText(texto);
        }
    }

    public static void main(String[] args) {
        IGTexto formulario1 = new IGTexto();
        formulario1.setBounds(0, 0, 540, 400);
        formulario1.setResizable(false);
        formulario1.setVisible(true);
        formulario1.setLocationRelativeTo(null);
    }
}
