package udpapplication;

import java.net.*;
import javax.swing.*;

public class UDPServer extends javax.swing.JFrame implements Runnable {

    public UDPServer() {
        initComponents();
    }

    private volatile boolean running = false;

    private void StartButtonActionPerformed(java.awt.event.ActionEvent evt) {

        StartButton.setEnabled(false);
        MessageArea.append("Server starting...\n");

        Thread thread = new Thread(this);
        running = true;
        thread.start();
    }

    @Override
    public void run() {

        String ipAddress = IPField.getText();
        int portNo = Integer.parseInt(PortField.getText());

        DatagramSocket ds = null;

        try {
            ds = new DatagramSocket(portNo, InetAddress.getByName(ipAddress));

            MessageArea.append("Server started on " + ipAddress + ":" + portNo + "\n");

            byte[] rcvmsg = new byte[1024];

            while (running) {

                DatagramPacket rcvPacket =
                    new DatagramPacket(rcvmsg, rcvmsg.length);

                ds.receive(rcvPacket);

                InetAddress clientIP = rcvPacket.getAddress();
                int clientPort = rcvPacket.getPort();

                String received =
                    new String(rcvPacket.getData(), 0, rcvPacket.getLength());

                MessageArea.append(
                    "Client " + clientIP + ":" + clientPort + " -> " + received + "\n"
                );

                byte[] sndmsg = received.getBytes();
                DatagramPacket sndPacket =
                    new DatagramPacket(sndmsg, sndmsg.length, clientIP, clientPort);

                ds.send(sndPacket);
            }

        } catch (Exception e) {
            MessageArea.append("Server error: " + e.getMessage() + "\n");
        } finally {
            if (ds != null && !ds.isClosed())
                ds.close();

            MessageArea.append("Server stopped.\n");
            StartButton.setEnabled(true);
        }
    }

    public void stopServer() {
        running = false;
    }
}
