const networkQuestions = [
  {
    question: "I want to obtain an IP address to use and communicate with the other hosts on the network. What should I use?",
    options: ["ARP", "DHCP", "NAT", "ICMP"],
    answer: "DHCP",
    hint: "This protocol automatically assigns IP addresses to devices on a network."
  },
  {
    question: "I want to find out the DNS server and default route on a network automatically. Which protocol should I use?",
    options: ["ICMP", "DHCP", "ARP", "NAT"],
    answer: "DHCP",
    hint: "It's the same protocol that handles automatic IP address assignment."
  },
  {
    question: "I want to find another host's hardware (MAC) address on the network. Which protocol lets me get this information?",
    options: ["ARP", "NAT", "ICMP", "DHCP"],
    answer: "ARP",
    hint: "This protocol resolves IP addresses to MAC addresses."
  },
  {
    question: "We need to give 25 devices Internet access; however, we only have one public IP address. What can we use to allow multiple private IP addresses to use a single public IP address?",
    options: ["DHCP", "NAT", "ARP", "ICMP"],
    answer: "NAT",
    hint: "This protocol translates private IP addresses to a public IP for internet access."
  },
  {
    question: "I am curious about the route the packets traverse to reach the destination server. What protocol would let me discover the path?",
    options: ["NAT", "DHCP", "ARP", "ICMP"],
    answer: "ICMP",
    hint: "This protocol can trace the path that packets take across a network."
  },
  {
    question: "I want to confirm that I can exchange packets with another host as if I am playing 'ping pong'. Which protocol supports this?",
    options: ["DHCP", "ICMP", "ARP", "NAT"],
    answer: "ICMP",
    hint: "You might be familiar with this protocol when using the 'ping' command."
  }
];

export default networkQuestions;
