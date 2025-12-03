package com.email.writer.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class webClientConfig {

    @Bean
    public WebClient webClient() {
        // no baseUrl set so you can pass full URI in calls, or set one here if you prefer
        return WebClient.builder().build();
    }

    // If you prefer injecting a builder instead:
    // @Bean
    // public WebClient.Builder webClientBuilder() {
    //     return WebClient.builder();
    // }
}
