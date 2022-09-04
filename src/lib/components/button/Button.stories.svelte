<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  
    import Button from './Button.svelte';
  </script>
  
  <Meta title="Components/Button" component={Button}/>
  
  <Template let:args>
    <Button {...args}/>
  </Template>
  
  <Story name="Button with Label" args={{label: "My Button"}}/>
  
  <!-- Dynamic snippet should be disabled for this story -->
  <Story name="Button No Args">
    <Button/>
  </Story>