import java.net.*;

public class UDPClient extends javax.swing.JFrame {

    public UDPClient() {
        initComponents();
    }

    private void SubmitButtonActionPerformed(java.awt.event.ActionEvent evt) {

        String ipAddress = IPField.getText().trim();
        int portNo = Integer.parseInt(PortField.getText().trim());
        String message = Mesg.getText().trim();

        try {
            DatagramSocket ds = new DatagramSocket();

            byte[] sndmsg = message.getBytes();
            DatagramPacket sndPacket =
                new DatagramPacket(
                    sndmsg,
                    sndmsg.length,
                    InetAddress.getByName(ipAddress),
                    portNo
                );

            ds.send(sndPacket);

            byte[] rcvmsg = new byte[1024];
            DatagramPacket rcvPacket =
                new DatagramPacket(rcvmsg, rcvmsg.length);

            ds.receive(rcvPacket);

            String response =
                new String(rcvPacket.getData(), 0, rcvPacket.getLength());

            Resp.append("Received: " + response + "\n");

            ds.close();

        } catch (Exception e) {
            Resp.append("Error: " + e.getMessage() + "\n");
        }
    }

    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new UDPClient().setVisible(true);
            }
        });
    }
}
