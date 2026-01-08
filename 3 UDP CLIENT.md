package udpapplication;

import java.net.*;
import javax.swing.*;

public class UDPClient extends javax.swing.JFrame {

    public UDPClient() {
        initComponents();
    }

    private void SendButtonActionPerformed(java.awt.event.ActionEvent evt) {

        String ipAddress = IPField.getText();
        int portNo = Integer.parseInt(portField.getText());
        String message = MessageField.getText();

        DatagramSocket ds = null;

        try {
            ds = new DatagramSocket();

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

            ServerResponseArea.append("Received: " + response + "\n");

        } catch (Exception e) {
            ServerResponseArea.append("Error: " + e.getMessage() + "\n");
        } finally {
            if (ds != null && !ds.isClosed())
                ds.close();
        }
    }
}
