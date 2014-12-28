<pre>
 ____   __   ____  __  ___  __  __ _   ___  __   _  _  ____     ___  __  
(  _ \ / _\ / ___)(  )/ __)(  )(  ( \ / __)/  \ ( \/ )(  __)   / __)/  \ 
 ) _ (/    \\___ \ )(( (__  )( /    /( (__(  O )/ \/ \ ) _)  _( (__(  O )
(____/\_/\_/(____/(__)\___)(__)\_)__) \___)\__/ \_)(_/(____)(_)\___)\__/ 

</pre>

## Introduction

Basicincome.co is a #DApp built on <a href="http://ripple.com">Ripple.com</a>. The #DApp is the brainchild of swedish prodigy Johan Nygren, and part of his philosophical work <a href="http://www.resilience.me/">How to Create Resilience</a>. Basicincome.co introduces some new concepts, such as a <a href="https://www.youtube.com/watch?v=sosu1YsR_Wo">THE INCENTIVE LAYER</a>, <a href="http://graph.basicincome.co">peer-to-peer dividend pathways</a>, and hints at a future feature called <a href="http://www.resilience.me/whitepaper-decentralised-taxrate-governance.html">decentralized taxRate governance</a>.


## Design


The system is a bit of a hack. It uses Ripple API <a href="https://ripple.com/build/websocket-tool/#subscribe">subscribe</a> to create a dividend-network that mirrors the Ripple Network. This mirror network computes dividends on each transaction, and does all the magic. Each user has to sign in manually once in a while to declare tax.

### basicincome_co.js

manages the websocket between client and server.



### subscribe.js 

creates the mirror network



### dividend_algorithm.js 

under development

#### Peer-to-Peer Dividends

<a href="http://graph.basicincome.co/">http://graph.basicincome.co/</a> shows you what p2p-dividend-pathways look like. Each account creates a unique safety net based on it´s financial unfolding. He will then recieve dividends from a network that extends beyond his safety net, but the safety net is his connection to the network. In other words, the LIFE you consume as you unfold becomes your connection to the network. In other words, your free will, your nervous system, is what shapes your social safety net, your network as a force of geology.


<b>How to boot up:<b>

Deploy to <a href="http://modulus.io">modulus.io</a>. That´s all you need to do :)


## http://basicincome.co
